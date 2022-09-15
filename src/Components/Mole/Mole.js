import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MolePic from "./MolePic.jpg";
import "./Mole.css";

function Mole() {

  const [xPoint, setxPoint] = useState({ x: 500 + "px" });
  const [yPoint, setyPoint] = useState({ y: 500 + "px" });
  const [key, setKey] = useState("");

  let [score, setscore] = useState(0);

  let [count, setcount] = useState(0);

  if (count === 16) {
    alert(`well done YOU got ${score} mole's`);
    setcount(count = 0);
    setscore(score = 0);
    setxPoint({x: 500 + "px" });
    setyPoint({y: 500 + "px" });
  }

  // useEffect(() => {
  //   setTimeout(setClicked(false), 1000);
  //   console.log(clicked);
  // }, [clicked]);

  function timer() {
    setInterval(counter, 1000);

    function counter() {
      if (count < 16) {
        setcount(count += 1);
        console.log(count);
      }
    }
  }

  function startGame() {
    if (count === 0) {
      timer();
    }
    handleClick();
  }

  function handleClick() {
    setxPoint({ x: Math.floor(Math.random() * 1000) + "px" });
    setyPoint({ y: Math.floor(Math.random() * 700) + "px" });
    console.log(xPoint);
    console.log(yPoint);
    setscore((score += 1));
    setKey(Date.now());
    console.log(score);
    console.log(key);
  }

  return (
    <>
      <StyledImg 
        key={key}
        src={MolePic}
        xPoint={xPoint}
        yPoint={yPoint}
        onClick={() => startGame()}
      ></StyledImg>
      <p id="timer-text">Get the Mole's</p>
      <p id="timer-text">
        <span id="text">Timer: </span>
        {count}
      </p>
      <p id="timer-text">
        <span id="text">Mole's: </span>
        {score}
      </p>
    </>
  );
}

const StyledImg = styled.img`
  position: absolute;
  left: ${({ xPoint }) => xPoint.x};
  top: ${({ yPoint }) => yPoint.y};
  width: 150px;
  height: 150px;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;


export default Mole;
