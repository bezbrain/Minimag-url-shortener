import React from "react";
import styled from "styled-components";

interface ButtonProps {
  content: string;
  icon?: React.ReactNode;
  btnCon?: string;
  btnCss?: string;
  handleClick: (e: React.FormEvent) => void;
  isDisable?: boolean;
}

const Button = ({
  content,
  icon,
  btnCon,
  btnCss,
  handleClick,
  isDisable,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={btnCon}>
      <button className={btnCss} onClick={handleClick} disabled={isDisable}>
        <span>{icon}</span>
        <span>{content}</span>
      </button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    background-color: #005ae2cc;
    color: #fff;
    padding-block: 5px;
    width: 100px;
  }

  > button:hover {
    transform: scale(1.05);
  }

  > button > span:first-child {
    font-size: 20px;
  }
`;
