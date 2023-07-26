import { useContext } from "react";
import { QuizContext } from "./context/quiz.jsx";
import Welcome from "./components/Welcome.jsx";
import "./App.css";

//import Question from "./components/Question.jsx";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="App">
      <h1> Quizz de Programação: </h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {/* {quizState.gameStage === "Playing" && <Question />} */}
    </div>
  );
}

export default App;
