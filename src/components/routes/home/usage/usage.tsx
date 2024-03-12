import { useLayoutEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { viewPortAnimation } from "../../../../utils/animations/viewportAnim";
import gsap from "gsap";

const Usage = () => {
  const usageRef = useRef<HTMLElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useLayoutEffect(() => {
    viewPortAnimation(inView, usageRef, gsap);
  }, [inView]);

  return (
    <UsageWrapper
      className="bg-[#F9FBFD]"
      ref={(el) => {
        ref(el);
        usageRef.current = el;
      }}
    >
      <div className="max-w-[1400px] p-4 mx-auto py-16 justify-between gap-[10vw] lg:px-8 lg:gap-4 sm:gap-[3vw] sm:flex">
        <h2 className="font-bold text-3xl text-center md:text-[3vw] lg:text-3xl md:w-[30%] sm:text-left">
          One URL. <br />
          Three <span className="text-[#005ae2cc]">Different</span> ways
        </h2>

        <div className="summary__con mt-6 sm:mt-0 sm:w-[70%]">
          <div>
            <h2 className="font-semibold text-2xl">2H+</h2>
            <p>Active users</p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">4T+</h2>
            <p>
              Links & QR <br /> codes created
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">25T+</h2>
            <p>Clicked Links</p>
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
