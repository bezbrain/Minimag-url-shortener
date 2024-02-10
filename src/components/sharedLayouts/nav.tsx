import styled from "styled-components";
import { minimagLogo } from "../../assets/logo";

const Nav = () => {
  return (
    <HeaderWrapper>
      <div className="w-[10%]">
        <img src={minimagLogo} alt="Logo" className="w-full" />
      </div>
      <nav className="flex w-[75%] justify-between">
        <ul className={`first__nav__items`}>
          <li>My URLs</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Analytics</li>
          <li>FAQs</li>
        </ul>

        <ul className={`second__nav__items`}>
          <li>Log in</li>
          <li>
            <button>Try for free</button>
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

  > nav {
    /* border: 2px solid red; */
  }

  .first__nav__items {
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    width: 55%;
  }

  .second__nav__items {
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    width: 20%;
  }
`;
