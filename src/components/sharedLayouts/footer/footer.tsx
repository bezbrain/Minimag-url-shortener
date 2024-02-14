import styled from "styled-components";
import {
  Company,
  Features,
  Legal,
  Media,
  Products,
  Resources,
  Solutions,
  WhyMinimag,
} from "..";

const Footer = () => {
  return (
    <FooterWrapper className="max-w-[1400px] p-4 mx-auto my-12 justify-between gap-4 iPhone:flex lg:px-8 border-2">
      <Media />

      <div className="containers mt-8 iPhone:w-4/5 iPhone:mt-0">
        <WhyMinimag />
        <Solutions />
        <Products />
        <Company />
        <Resources />
        <Features />
        <Legal />
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  .containers {
    border: 2px solid red;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
