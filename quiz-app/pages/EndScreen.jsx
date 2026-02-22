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
      <div className="end-scree-text-container">
        <h1>Quiz completed</h1>

        <p>
          Congratulations you answered {points}/{questions.length} questions
          correctly!
        </p>
      </div>

      <div className="play-again-container">
        <p>Would you like to play again?</p>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
}

export default EndScreen;
