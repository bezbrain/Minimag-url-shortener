import styled from "styled-components";
import { PriceCard } from "..";
import { Button } from "../../../general";
import { useLayoutEffect, useRef } from "react";
import { viewPortAnimation } from "../../../../utils/animations/viewportAnim";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

interface PriceProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Price = ({ setIsComingSoon }: PriceProps) => {
  const priceCardRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const handleCustomClick = () => {
    setIsComingSoon(true);
  };

  const handleSelectClick = () => {
    setIsComingSoon(true);
  };

  useLayoutEffect(() => {
    viewPortAnimation(inView, priceCardRef, gsap);
  }, [inView]);

  return (
    <PriceWrapper
      className="max-w-[1400px] p-4 mx-auto py-16"
      id="pricing"
      data-testid="price-section"
    >
      <header className="max-w-[500px] mx-auto text-center">
        <h2 className="font-bold text-3xl md:text-[3vw] lg:text-3xl mb-4">
          An <span className="text-[#005ae2cc]">easy pricing</span> for your
          use.
        </h2>
        <p className="text-sm lg:text-[16px]">
          Fiting price for different plans; from catering for your personal
          needs to your business and your team, prices are made convenient for
          you.
        </p>
      </header>

      <div
        className="flex w-full flex-wrap justify-center mx-auto mt-12 gap-[20px] md:flex-nowrap surfaceDuo:w-fit"
        ref={(el) => {
          ref(el);
          priceCardRef.current = el;
        }}
      >
        <PriceCard
          type={"Basic"}
          price={"Free"}
          title={"Free plan for all users"}
          planOne={"Unlimited URL Shortening"}
          planTwo={"Basic Link Analytics"}
          planThree={"Customizable Short Links"}
          planFour={"Standard Support"}
          planFive={"Ad-supported"}
          setIsComingSoon={setIsComingSoon}
        />
        <PriceCard
          type={"Professional"}
          price={"$15/month"}
          title={"Ideal for business creators"}
          planOne={"Enhanced Link Analytics"}
          planTwo={"Custom Branded Domains"}
          planThree={"Advanced Link Customization"}
          planFour={"Priority Support"}
          planFive={"Ad-free Experience"}
          setIsComingSoon={setIsComingSoon}
        />
        <PriceCard
          type={"Teams"}
          price={"$25/month"}
          title={"Share with up to 10 users"}
          planOne={"Team Collaboration"}
          planTwo={"User Roles and Permissions"}
          planThree={"Enhanced Security"}
          planFour={"API Access"}
          planFive={"Dedicated Account Manager"}
          setIsComingSoon={setIsComingSoon}
        />
      </div>

      <div className="w-fit mt-8 mx-auto flex gap-2 md:my-16">
        <Button
          content="Get Custom Price"
          btnCss="w-[130px] text-sm rounded-3xl py-2 bg-white text-[#005ae2cc] border-[1px] border-[#005ae2cc] iPhone:w-[160px] iPhone:text-md"
          handleClick={handleCustomClick}
        />
        <Button
          content="Select Pricing"
          btnCss="w-[130px] text-sm rounded-3xl py-2 border-[1px] border-[#005ae2cc] iPhone:w-[160px] iPhone:text-md"
          handleClick={handleSelectClick}
        />
      </div>
    </PriceWrapper>
  );
};

export default Price;

const PriceWrapper = styled.section`
  /*  */
`;
