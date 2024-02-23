import styled from "styled-components";

const NoUrls = () => {
  return (
    <NoUrlWrapper className="w-fit absolute right-[50%] top-[40vh] translate-x-[50%] text-center">
      <tr className="no__url__row">
        <td>
          <p className="text-3xl text-red-900 font-semibold">No URLs</p>
          <img
            src="https://th.bing.com/th/id/OIP.wcqMAgXJcsFC8Ba5ndfY7QHaEY?w=297&h=180&c=7&r=0&o=5&pid=1.7"
            alt="No URL"
          />
        </td>
      </tr>
    </NoUrlWrapper>
  );
};

export default NoUrls;

const NoUrlWrapper = styled.tbody`
  @media screen and (max-height: 640px) {
    /* border: 2px solid red; */
    top: 250px !important;

    .no__url__row > td p {
      font-size: 25px !important;
    }
    .no__url__row > td img {
      width: 200px;
    }
  }

  .no__url__row > td img {
    /* border: 2px solid red; */
    margin-top: 10px;
    animation: rotateImg ease-in-out 2s infinite;
  }
  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    75% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
