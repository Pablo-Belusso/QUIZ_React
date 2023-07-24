import Quiz from "../img/quiz.svg";
import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja Bem Vindo!</h2>
      <p>Clique no Botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
