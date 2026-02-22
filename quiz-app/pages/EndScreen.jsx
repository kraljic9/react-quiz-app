import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { questions } from "../data/Questions";
import { useNavigate } from "react-router-dom";

function EndScreen() {
  let navigate = useNavigate();

  function restart() {
    setPoints(0);
    setAnswerIndex(null);
    setCurrentQuestionIndex(0);
    navigate("/");
  }

  const { points, setPoints, setAnswerIndex, setCurrentQuestionIndex } =
    useContext(QuizContext);

  return (
    <div className="end-screen-container">
      <div className="end-screen-text-container">
        <h1 className="end-screen-title">Quiz completed</h1>

        <p className="end-screen-txt">
          Congratulations you answered{" "}
          <span className="result">
            {points}/{questions.length}
          </span>{" "}
          questions correctly!
        </p>
      </div>

      <div className="play-again-container">
        <p className="play-again-txt">Would you like to play again?</p>
        <button onClick={restart} className="restart-btn">
          Restart
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
