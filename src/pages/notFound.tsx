import styled from "styled-components";
import { LinkBtn } from "../components/general";

const NotFound = () => {
  return (
    <NotFoundWrapper className="pt-[60px] max-w-[1400px] p-4 mx-auto py-16 gap-[15vw] lg:px-8">
      <div className="not__found__con">
        <p className="not__found__text text-2xl font-bold text-red-900 sm:text-5xl">
          Page Cannot be Found
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.RvrcXfkHX5UeQHqAEIseLgHaH5?w=162&h=180&c=7&r=0&o=5&pid=1.7"
          className="not__found__img mx-auto w-1/2 mb-8"
          alt="Not Found"
        />
        <LinkBtn btnContent="GO BACK HOME" link="/" btnStyles="w-fit mx-auto" />
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;

const NotFoundWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .not__found__con {
    padding-top: 10vw;
  }
  @media screen and (max-width: 630px) {
    align-items: center;

    .not__found__con {
      padding-top: 0vw;
    }
  }

  .not__found__text {
    animation: notFoundText ease-in-out 1s 1;
  }
  @keyframes notFoundText {
    0% {
      margin-left: 0px;
    }
    50% {
      margin-left: -50px;
    }
    75% {
      margin-left: 100px;
    }
    100% {
      margin-left: 0px;
    }
  }

  .not__found__img {
    animation: scaleImage ease-in-out 1s infinite;
  }
  @keyframes scaleImage {
    0% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;
