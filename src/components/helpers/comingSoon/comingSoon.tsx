import React from "react";
import styled from "styled-components";

interface ComingSoonProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const ComingSoon = ({ setIsComingSoon }: ComingSoonProps) => {
  return (
    <ComingSoonWrapper onClick={() => setIsComingSoon(false)}>
      <p className="text-white max-w-[320px] text-center">
        This feature will be implemented soon
      </p>
      <img
        src="https://th.bing.com/th?id=OIP.H9ykLmFgwlVX3U1cLOYWCgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="Coming Soon"
        className="rounded-full"
      />
    </ComingSoonWrapper>
  );
};

export default ComingSoon;

const ComingSoonWrapper = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  > p {
    font-size: 2rem;
    animation: scaleText ease-in-out 1s 1;
  }
  @keyframes scaleText {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1.05);
    }
  }

  > img {
    margin-top: 10px;
    animation: rotateImg ease-in-out 2s 1;
  }
  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    75% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media screen and (max-width: 420px) {
    > p {
      font-size: 1.5rem;
    }
    > img {
      width: 200px;
    }
  }
`;
