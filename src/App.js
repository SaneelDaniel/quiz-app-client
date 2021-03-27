import "./App.css";
import Quiz from "./Components/QuizLayout";
import Answers from "./Components/Answers";
import AppState from "./Context/AppState";
import { useEffect, useState } from "react";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Quiz />
      <Header />
    </div>
  );
}

export default () => {
  return (
    <AppState>
      <App />
    </AppState>
  );
};
