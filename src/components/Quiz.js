import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";



function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState , setTotalscore, setRegames, regames, totalscore } = useContext(
    GameStateContext
  );

 

  const nextQuestion = () => {
    if(currentQuestion == Questions.length-1  )
  finishQuiz();
   else
  {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    
  
   
    setGameState("finished");
  
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
           // chooseOption("optionA");
           setScore(score + 1);
           nextQuestion();
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
           // chooseOption("optionB");
            nextQuestion();
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
       
      </div>

      {currentQuestion == Questions.length  ? (
        <button onClick={finishQuiz()} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
