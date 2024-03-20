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
// import { Link } from "react-router-dom";

interface FooterProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ setIsComingSoon }: FooterProps) => {
  return (
    <FooterWrapper data-testid="footer-section">
      <section className="max-w-[1400px] relative p-4 mx-auto py-16 justify-between gap-[15vw] lg:px-8 lg:gap-4 sm:gap-[10vw] iPhone:flex">
        <Media />

        <div className="containers my-8 mb-12 iPhone:w-4/5 iPhone:mt-0">
          <WhyMinimag setIsComingSoon={setIsComingSoon} />
          <Solutions setIsComingSoon={setIsComingSoon} />
          <Products />
          <Company setIsComingSoon={setIsComingSoon} />
          <Resources setIsComingSoon={setIsComingSoon} />
          <Features />
          <Legal setIsComingSoon={setIsComingSoon} />
        </div>

        <div className="absolute flex right-[50%] translate-x-[50%] w-full px-2 bottom-12 text-[13px] smallPhone:text-md smallPhone:w-[290px] surfaceDuo:right-4 surfaceDuo:translate-x-[0%]">
          <span
            className="cursor-pointer"
            onClick={() => setIsComingSoon(true)}
          >
            Terms of Service
          </span>{" "}
          <span className="w-[3px] h-[20px] bg-slate-400 block mx-2"></span>
          <span
            className="cursor-pointer"
            onClick={() => setIsComingSoon(true)}
          >
            Security
          </span>{" "}
          <span className="w-[3px] h-[20px] bg-slate-400 block mx-2"></span>
          <span className="">Minimag 2024</span>
        </div>
      </section>
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
