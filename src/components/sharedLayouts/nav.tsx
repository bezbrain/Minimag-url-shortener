import styled from "styled-components";
import { minimagLogo } from "../../assets/logo";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <HeaderWrapper>
      <div className="w-[10%]">
        <img src={minimagLogo} alt="Logo" className="w-full" />
      </div>
      <nav className="flex w-[75%] justify-between">
        <ul className={`first__nav__items font-semibold`}>
          <li>
            <Link to="">My URLs</Link>
          </li>
          <li>
            <Link to="">Features</Link>
          </li>
          <li>
            <Link to="">Pricing</Link>
          </li>
          <li>
            <Link to="">Analytics</Link>
          </li>
          <li>
            <Link to="">FAQs</Link>
          </li>
        </ul>

        <ul className={`second__nav__items font-semibold`}>
          <li>
            <Link to="" className="text-blue-600">
              Log in
            </Link>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl">
              Try for free
            </button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Nav;

const HeaderWrapper = styled.header`
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 100%;
  padding-inline: 5vw;

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
    width: 20%;
  }
`;
