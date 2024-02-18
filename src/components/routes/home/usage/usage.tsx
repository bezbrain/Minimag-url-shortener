import styled from "styled-components";

const Usage = () => {
  return (
    <UsageWrapper className="bg-[#F9FBFD]">
      <div className="max-w-[1400px] p-4 mx-auto py-16 justify-between gap-[10vw] lg:px-8 lg:gap-4 sm:gap-[3vw] sm:flex">
        <h2 className="font-bold text-3xl text-center md:text-[3vw] lg:text-3xl md:w-[30%] sm:text-left">
          One Stop. <br />
          Four <span className="text-[#005ae2cc]">Possibilities.</span>
        </h2>

        <div className="summary__con mt-6 sm:mt-0 sm:w-[70%]">
          <div>
            <h2 className="font-semibold text-2xl">3M</h2>
            <p>Active users</p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">60M</h2>
            <p>
              Links & QR <br /> codes created
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">1B</h2>
            <p>
              Clicked & Scanned <br /> connection
            </p>
          </div>
        </div>
      </div>
    </UsageWrapper>
  );
};

export default Usage;

const UsageWrapper = styled.section`
  .summary__con {
    /* border: 2px solid red; */
    text-align: right;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    .summary__con {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
  @media screen and (max-width: 639px) {
    .summary__con {
      /* border: 2px solid red; */
      text-align: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .summary__con > div {
      /* border: 2px solid green; */
      width: 150px;
    }
  }
`;
