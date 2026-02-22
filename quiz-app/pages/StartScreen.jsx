import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StartScreen() {
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  function startQuiz() {
    navigate("/quiz");
  }

  function displayMsg() {
    setMsg("Well to bad, click the start button to play");
  }

  return (
    <div className="start-screen-container">
      <h1 className="start-screen-title">Welcome to the Quiz App!</h1>
      <p className="start-screen-txt">
        Test your knowledge, click the button to start the quiz
      </p>
      <p className="no-message">{msg}</p>

      <div className="start-screen-btns">
        <button onClick={startQuiz} className="start-screen-btn start-btn">
          Start
        </button>
        <button onClick={displayMsg} className="start-screen-btn no-btn">
          No
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
