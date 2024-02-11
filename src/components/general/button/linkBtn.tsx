import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBtn = () => {
  return (
    <LinkBtnWrapper>
      <Link to="">Try for free</Link>
    </LinkBtnWrapper>
  );
};

export default LinkBtn;

const LinkBtnWrapper = styled.div`
  background-color: #005ae2cc;
  color: #fff;
  border-radius: 1.5rem;

  > a {
    display: block;
    padding: 0.5rem 1.5rem;
    border-radius: 1.5rem;
  }

  > a:hover {
    border-bottom: none !important;
    transform: scale(1.05);
  }
`;
