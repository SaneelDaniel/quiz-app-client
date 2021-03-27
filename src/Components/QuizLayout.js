import React, { useEffect, useReducer, useState } from "react";
import Loader from "react-loader-spinner";
import Answers from "./Answers";
import AppContext from "../Context/app-context";

var url = "https://mongo-quiz-rest.herokuapp.com/quizes/QuizCollection";

export function QuizLayout() {
  const { quizListArray, SET_QUIZLIST_ARRAY } = React.useContext(AppContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizList, setQuizList] = useState([]);
  const [currrentSelected, setCurrrentSelected] = useState(null);
  const [seeAnswer, setSeeAnswer] = useState(false);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    await fetch(url, {
      method: "get",
      dataType: "json",
    })
      .then((response) => response.json())
      .then((data) => {
        var list = [];
        for (var i = 0; i < data.length; i++) {
          var quiz = data[i];
          list.push(quiz);
        }
        setQuizList(list);
        SET_QUIZLIST_ARRAY(list);
      })
      .catch((err) => {
        window.alert("Server Unresponsive");
      });
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrrentSelected(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const checkSelection = () => {
    var isCorrect = false;
    if (
      quizList[currentQuestion].choices[currrentSelected] ===
      quizList[currentQuestion].rightChoice
    ) {
      handleAnswerOptionClick((isCorrect = true));
    }
    handleAnswerOptionClick(isCorrect);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      {quizList?.length > 0 ? (
        <h1>Good Luck</h1>
      ) : (
        <div>
          <h3>Welcome to the Quiz App</h3>
        </div>
      )}

      <div className="">
        {showScore ? ( // the quiz is finishes, show the score
          <div>
            <div className="app-score">
              <div className="score-section ">
                <span>
                  You scored {score} out of {quizList.length} (
                  {(score / quizList.length) * 100}%)
                </span>
              </div>
              <button className="retry-button" onClick={refreshPage}>
                Retry!
              </button>
            </div>
            <div className="answers">
              <Answers list={quizList} />
            </div>
          </div>
        ) : quizList.length > 0 ? ( // the list is found, render the UI component to display the questions
          <div className="app">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{quizList.length}
              </div>
              <div className="question-text">
                {quizList[currentQuestion].questionString}
              </div>
            </div>
            <div className="answer-section">
              {quizList[currentQuestion].choices.map((answerOption, index) => (
                <div key={index}>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="radiobutton"
                        value={index}
                        onChange={(e) => setCurrrentSelected(e.target.value)}
                      />
                      {quizList[currentQuestion].choices[index]}
                    </label>
                  </div>
                </div>
              ))}
              {currentQuestion === quizList.length - 1 ? (
                <button onClick={checkSelection}>Submit Quiz</button>
              ) : (
                <div>
                  {currrentSelected !== null ? (
                    <button
                      type="submit"
                      className="btn btn-default"
                      onClick={checkSelection}
                    >
                      Next
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          //the loading state
          <div className="">
            <Loader type="Bars" color="##A9A9A9" height={80} width={80} />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizLayout;
