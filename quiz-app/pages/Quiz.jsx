import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { questions } from "../data/Questions";
import Question from "../components/Question";

function Quiz() {
  const { currentQuestionIndex } = useContext(QuizContext);

  return <>{<Question questionObj={questions[currentQuestionIndex]} />}</>;
}

export default Quiz;
