import { useState } from "react";
import { QuizContext } from "./QuizContext";

function ContextProvider() {
  // State for points, for answerIndex, current question

  const [points, setPoints] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <>
      <QuizContext.Provider
        value={{
          points,
          setPoints,
          answerIndex,
          setAnswerIndex,
          currentQuestionIndex,
          setCurrentQuestionIndex,
        }}
      ></QuizContext.Provider>
    </>
  );
}

export default ContextProvider;
