import React, { useEffect } from "react";
import Quiz from "./QuizLayout";
import AppContext from "../Context/app-context";

//This class handles showing the right answers
//after the quiz is subbmitted by the user

function Answers({ lst }) {
  const { quizListArray, SET_QUIZLIST_ARRAY } = React.useContext(AppContext);

  var list = quizListArray;
  useEffect(() => {
    console.log(list);
  }, [quizListArray]);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="answers-list">
      {list ? (
        <div>
          <h2>Answers</h2>

          {list?.map((item, index) => {
            return (
              <div className="answer-card" key={index}>
                <div className="answer-section">
                  <div className="answer-count">
                    <p> Q{index + 1}. </p>
                    <p>{item.questionString}</p>
                  </div>
                  <div className="answer-count">
                    <p>Answer: {item.rightChoice}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Answers;
