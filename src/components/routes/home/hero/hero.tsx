import styled from "styled-components";
import { LinkBtn } from "../../../general";
import { shortenerImg } from "../../../../assets/images";
import { getAuthToken } from "../../../../utils/authToken";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero__con max-w-[1400px] mx-auto px-4 py-[10vh] text-center">
        <h1 className="text-[5vw] font-bold  text-[#cfcece] xl:text-6xl">
          Have a Better Experience with Our Advanced{" "}
          <span className="text-[#E25000]">URLs Shortening</span> and
          Customization Tools
        </h1>
        <p className="my-8 text-sm text-[#cfcece] max-w-[600px] mx-auto sm:my-12 sm:text-xl">
          Personalize and customize URLs to your preferred and most simple
          combination of characters, to enhance more user experience.
        </p>

        <div className="flex w-fit mx-auto space-x-1 sm:space-x-4">
          {getAuthToken() ? (
            ""
          ) : (
            <LinkBtn btnContent="Sign Up" link="/register" />
          )}
          <LinkBtn btnContent="Learn More" link="" />
        </div>

        <div className="hero__img mt-12 max-w-[600px] mx-auto shadow-lg shadow-slate-800 rounded-md">
          <img src={shortenerImg} alt="Shortener" className="rounded-md" />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  background: radial-gradient(#73a4ee, #005ae2cc);
  min-height: 90vh;

  .hero__con > h1 {
    line-height: 2.5cm !important;
  }
  @media screen and (max-width: 640px) {
    min-height: 70vh;
  }
  @media screen and (max-width: 1280px) {
    .hero__con > h1 {
      line-height: 7vw !important;
    }
  }

  .hero__img > img {
    animation: card 1s ease-in-out 2;
  }
  @keyframes card {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
