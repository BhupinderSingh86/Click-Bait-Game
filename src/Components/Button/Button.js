import React from "react";
import { useState} from "react";
import "./ButtonCSS.css";
import styled from "styled-components";

function Button() {
  // const myRef = useRef();
  // const x = myRef.current.offsetLeft;
  // const y = myRef.current.offsetTop;
  // console.log(x);

  const [xPoint, setxPoint] = useState({ x: 200 + "px" });
  const [yPoint, setyPoint] = useState({ y: 500 + "px" });

  function handleClick() {
    setxPoint({ x: Math.floor(Math.random() * 1000) + "px" });
    setyPoint({ y: Math.floor(Math.random() * 700) + "px" });
    console.log(xPoint);
    console.log(yPoint);
  }

  return (
    <StyledButton xPoint={xPoint} yPoint={yPoint} onClick={() => handleClick()}>Click me</StyledButton>
  );
}

//pass x point as props to our button.

const StyledButton = styled.button`
  background-color: ${({ background }) => "aqua"};
  position: absolute;
  left: ${({ xPoint }) => xPoint.x};
  top: ${({ yPoint }) => yPoint.y};
`;

export default Button;
