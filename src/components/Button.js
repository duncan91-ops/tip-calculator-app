import React from "react";
import Wrapper from "../assets/wrappers/Button";

const Button = ({ value, clickHandler, active }) => {
  console.log(value);
  return (
    <Wrapper className={active && "active"} onClick={() => clickHandler(value)}>
      {value}%
    </Wrapper>
  );
};

export default Button;
