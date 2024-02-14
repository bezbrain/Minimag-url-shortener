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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper className="max-w-[1400px] relative p-4 mx-auto py-16 justify-between gap-[15vw] lg:px-8 lg:gap-4 sm:gap-[10vw] iPhone:flex">
      <Media />

      <div className="containers my-8 iPhone:w-4/5 iPhone:mt-0">
        <WhyMinimag />
        <Solutions />
        <Products />
        <Company />
        <Resources />
        <Features />
        <Legal />
      </div>

      <div className="absolute flex right-[50%] translate-x-[50%] w-[330px] bottom-12 surfaceDuo:right-4 surfaceDuo:translate-x-[0%]">
        <Link to="">Terms of Service</Link>{" "}
        <span className="w-[3px] h-[20px] bg-slate-400 block mx-2"></span>
        <Link to="">Security</Link>{" "}
        <span className="w-[3px] h-[20px] bg-slate-400 block mx-2"></span>
        <span>Minimag 2024</span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  background: radial-gradient(#81b0f5, #0867f4cc);

  .containers {
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    .containers {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
`;
