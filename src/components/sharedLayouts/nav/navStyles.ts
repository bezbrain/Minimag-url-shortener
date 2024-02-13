import styled from "styled-components";

export const HeaderWrapper = styled.header`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 100%;
  padding-inline: 5vw;
  backdrop-filter: blur(20px);
  mix-blend-mode: multiply;

  > nav {
    /* border: 2px solid red; */
  }

  .first__nav__items {
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
  }

  .second__nav__items {
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
  }

  ul li a:hover {
    border-bottom: 3px solid #005ae2cc;
  }

  @media screen and (max-width: 1100px) {
    > nav {
      width: 80%;
    }
  }
  @media screen and (max-width: 950px) {
    > nav {
      /* border: 2px solid red; */
      flex-direction: column;
      position: fixed;
      top: 0;
      right: -400px;
      width: 300px;
      min-height: 100vh;
      background-color: #005ae2cc;
      transition: ease 0.5s all;
      z-index: 10;
    }
    .add__nav {
      right: 0px;
    }
    .add__color {
      color: #fff;
    }
    .first__nav__items {
      flex-direction: column;
      margin-top: 12vh;
      width: 100%;
    }
    .second__nav__items {
      flex-direction: column;
      width: 100%;
      margin-top: 8vh;
    }
    ul li a {
      color: #fff;
    }
    ul li a:hover {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 420px) {
    > nav {
      width: 100%;
    }
  }
`;
