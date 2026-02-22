import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { questions } from "../data/Questions";
import { useNavigate } from "react-router-dom";

function Question({ questionObj }) {
  const {
    setPoints,
    answerIndex,
    setAnswerIndex,
    setCurrentQuestionIndex,
    currentQuestionIndex,
  } = useContext(QuizContext);

  console.log(questions[currentQuestionIndex]);

  let navigate = useNavigate();

  function nextQuestion() {
    if (answerIndex === questionObj.correctIndex) {
      setPoints((prev) => prev + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      navigate("/end-screen");
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  }

  function restart() {
    setPoints(0);
    setAnswerIndex(null);
    setCurrentQuestionIndex(0);
    navigate("/");
  }

  return (
    <>
      {questions[currentQuestionIndex] ? (
        <>
          <h1>{questionObj.question}</h1>

          <div className="answers">
            {questionObj.answers.map((answer, index) => (
              <div className="answer-wrap" key={answer}>
                <button onClick={() => setAnswerIndex(index)}>{answer}</button>
              </div>
            ))}

            <button onClick={nextQuestion}>Next Question</button>
          </div>
        </>
      ) : (
        <>
          <h1>
            The game is over, if you wish to play again click the reset button
          </h1>

          <button onClick={restart}>Reset</button>
        </>
      )}
    </>
  );
}

export default Question;
