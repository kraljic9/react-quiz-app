import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { questions } from "../data/Questions";
import Question from "../components/Question";

function Quiz() {
  const { currentQuestionIndex } = useContext(QuizContext);

  return (
    <div className="quiz-container">
      {<Question questionObj={questions[currentQuestionIndex]} />}
    </div>
  );
}

export default Quiz;
