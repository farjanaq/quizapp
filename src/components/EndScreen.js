import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName , regames, totalscore, setRegames , setTotalscore} = useContext(
    GameStateContext
  );


  
   
    console.log('score', score);
    console.log('totascore', totalscore);
    console.log('regames', regames)

  const restartQuiz = () => {
    setRegames(regames+1);
    setTotalscore( score+ totalscore);
    setScore(0);

    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {(score *100 )/Questions.length} 
      </h1>
      {/*<h1> total score : {totalscore ==0 ? score :totalscore + score}</h1> */}

      <h1> total score avarage : {regames==0?  (score *100) /Questions.length  : ((totalscore + score)*100)/ ((regames+1)*Questions.length) }</h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
