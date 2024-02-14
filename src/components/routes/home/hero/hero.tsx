import styled from "styled-components";
import { LinkBtn } from "../../../general";
import { shortenerImg } from "../../../../assets/images";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="max-w-[600px] mx-auto px-4 py-[10vh] text-center">
        <h1 className="text-[5vw] font-bold leading-snug text-[#cfcece] sm:text-3xl">
          Have a Better Experience with Our Advanced{" "}
          <span className="text-[#E25000]">URLs Shortening</span> and
          Customization Tools
        </h1>
        <p className="my-8 text-sm text-[#cfcece] sm:my-12 sm:text-xl">
          Personalize and customize URLs to your preferred and most simple
          combination of characters, to enhance more user experience.
        </p>

        <div className="flex w-fit mx-auto space-x-4 sm:space-x-8">
          <LinkBtn btnContent="Sign Up" link="/register" />
          <LinkBtn btnContent="Learn More" link="" />
        </div>

        <div className="hero__img mt-12 shadow-lg shadow-slate-800">
          <img src={shortenerImg} alt="Shortener" className="rounded-md" />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  background: radial-gradient(#73a4ee, #005ae2cc);
  min-height: 80vh;

  .hero__img > img {
    animation: card 1s ease-in-out 2;
  }
  @keyframes card {
    0% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
