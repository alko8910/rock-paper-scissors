import React from "react";
import { useState, useEffect } from "react";
import Paper from "./images/Paper.jpg";
import Paper1 from "./images/Paper1.jpeg";
import Rock from "./images/Rock.jpg";
import Rock1 from "./images/Rock1.jpeg";
import Scissors from "./images/Scissors.jpg";
import Scissors1 from "./images/Scissors1.jpeg";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counter";
import { StyledButton } from "./styles/Button.styled";


const Game = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const getImage = (option) => {
    switch (option) {
      case "Rock" : return Rock;
      case "Paper": return Paper;
      case "Scissors": return Scissors;
      default: return null;
    }
  }
  const getImageAlternate = (option) => {
    switch (option) {
      case "Rock" : return Rock1;
      case "Paper": return Paper1;
      case "Scissors": return Scissors1;
      default: return null;
    }
  }

  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const setRandomChoice = () => {
    const rpsComp = ["Rock", "Paper", "Scissors"];
    const randomChoice = rpsComp[Math.floor(Math.random() * rpsComp.length)];
    setCompChoice(randomChoice);
  };

  const handleClick = (value) => {
    setUserChoice(value);

    setRandomChoice();
  };
  useEffect(() => {
    {
      switch (userChoice + compChoice) {
        case "ScissorsPaper":
        case "RockScissors":
        case "PaperRock":
          dispatch(increment());
          setMessage(`You win!  ${userChoice} beats ${compChoice}`);
          setDisabled(true);

          break;
        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
          dispatch(decrement());
          setMessage(`You lose! ${compChoice} beats ${userChoice}`);
          setDisabled(true);

          break;
        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
          setMessage("Tie");
          setDisabled(true);
          break;
          default: return
      }
    }
  }, [userChoice, compChoice]);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const playAgain = () => {
    setDisabled(false);
    setMessage("");
  };
 

  return (
    <div>
      <div>
        <p>Score: {count}</p>
        <h1>{message}</h1>
      </div>
      {!disabled && (
        <div>
          {["Rock", "Paper", "Scissors"].map(x => <img src={getImage(x)} onClick={() => handleClick(x)} alt={x} key={x}/>)}
          
        </div>
      )}
      {disabled && (
        <div>
          <h1>
            <img src={getImageAlternate(userChoice)} alt={userChoice} />
            <img src={getImageAlternate(compChoice)} alt={compChoice} />
          </h1>
        </div>
      )}

      <div>{!disabled && <h1>Pick one!</h1>}</div>
      <div>
        {disabled && (
          <StyledButton  onClick={playAgain}>
            Play again
          </StyledButton>
        )}
      </div>
    </div>
  );
};

export default Game;
