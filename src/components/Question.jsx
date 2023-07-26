import { useContext } from "react";
import { QuizContext } from "../context/quiz.jsx";

import React from "react";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);
  return (
    <div id="question">
      <p>Pergunta de 0 a 10</p>
      <h2>Pergunta atual</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  );
};

export default Question;
