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
      <p>Test your knowledge, click the button to start the quiz</p>
      <p>{msg}</p>
      <button onClick={startQuiz}>Start</button>
      <button onClick={displayMsg}>No</button>
    </div>
  );
}

export default StartScreen;
