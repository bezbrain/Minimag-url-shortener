import styled from "styled-components";
import { PriceCard } from "..";

const Price = () => {
  return (
    <PriceWrapper className="max-w-[1400px] p-4 mx-auto py-16">
      <header className="max-w-[500px] mx-auto text-center">
        <h2 className="font-bold text-3xl md:text-[3vw] lg:text-3xl mb-4">
          A <span className="text-[#005ae2cc]">price perfect</span> for your
          needs.
        </h2>
        <p className="text-sm lg:text-[16px]">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </header>

      <div>
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </PriceWrapper>
  );
};

export default Price;

const PriceWrapper = styled.section`
  /*  */
`;
