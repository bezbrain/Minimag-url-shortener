import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkBtnProps {
  btnContent: string;
  btnStyles?: string;
  link: string;
}

const LinkBtn = ({ btnContent, btnStyles, link }: LinkBtnProps) => {
  return (
    <LinkBtnWrapper className={btnStyles}>
      <Link to={link}>{btnContent}</Link>
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
