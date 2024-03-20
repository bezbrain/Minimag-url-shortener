import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { SiNormalizedotcss } from "react-icons/si";
import { PiSquaresFourLight } from "react-icons/pi";
import { MdOutlineInsertLink } from "react-icons/md";
import { WhyMinimagCon } from "..";
import { useInView } from "react-intersection-observer";
import { useLayoutEffect, useRef } from "react";
import { viewPortAnimation } from "../../../../utils/animations/viewportAnim";
import gsap from "gsap";

const WhyMinimag = () => {
  const whyChooseRef = useRef<HTMLElement | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  useLayoutEffect(() => {
    viewPortAnimation(inView, whyChooseRef, gsap);
  }, [inView]);

  return (
    <WhyMinimagWrapper
      className=""
      ref={(el) => {
        ref(el);
        whyChooseRef.current = el;
      }}
      data-testid="why-choose"
    >
      <div className="max-w-[1400px] p-4 mx-auto py-16 justify-between gap-[5vw] lg:px-8 lg:gap-[4vw] md:flex">
        <div className="text-center md:w-[35%] sm:text-left">
          <h2 className="font-bold text-3xl md:text-[3vw] lg:text-3xl">
            Why choose
            <span className="text-[#005ae2cc]"> Minimag</span>
          </h2>
          <p className="mt-4">
            Minimag Shortener is one of those few outstanding URL shortener you
            would see out there with easy way of shortening URLs. It also allows
            you you personalize your URL by customizing the URL for your brand.
            Either shortened or customized URL, you can generate QR code for
            any.
          </p>
        </div>

        <div className="summary__con mt-6 md:mt-0 md:w-[65%]">
          <WhyMinimagCon
            icon={<MdOutlineInsertLink />}
            title={"URL Shortening"}
            summary={
              "With no stress, you can generate short URLs for long links and enjoy better personal experience with your virtual customers."
            }
          />
          <WhyMinimagCon
            icon={<FaRegEdit />}
            title={"Custom URLs"}
            summary={
              "With Minimag, you can create custom URLs, for your brand. This is quite a solution for socials and businesses."
            }
          />
          <WhyMinimagCon
            icon={<PiSquaresFourLight />}
            title={"QR Codes"}
            summary={
              "Whether shortened or customized URLs, generate their QR codes for your business, events and others. Bring your customers closer to you with this scan solution."
            }
          />
          <WhyMinimagCon
            icon={<SiNormalizedotcss />}
            title={"Data Analytics"}
            summary={
              "Receive data on the usage of your URLs. Either your shortened URL, custom URLs or generated QR codes. This is an embedded monitoring solution."
            }
          />
        </div>
      </div>
    </WhyMinimagWrapper>
  );
};

export default WhyMinimag;

const WhyMinimagWrapper = styled.section`
  .summary__con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4vw;
  }
  @media screen and (max-width: 540px) {
    .summary__con {
      grid-template-columns: 1fr;
    }
  }
`;
