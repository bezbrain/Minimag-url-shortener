import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { SiNormalizedotcss } from "react-icons/si";
import { PiSquaresFourLight } from "react-icons/pi";
import { MdOutlineInsertLink } from "react-icons/md";
import { WhyMinimagCon } from "..";

const WhyMinimag = () => {
  return (
    <WhyMinimagWrapper className="bg-[#fff]">
      <div className="max-w-[1400px] p-4 mx-auto py-16 justify-between gap-[5vw] lg:px-8 lg:gap-[4vw] md:flex">
        <div className="md:w-[35%]">
          <h2 className="font-bold text-3xl md:text-[3vw] lg:text-3xl">
            Why choose
            <span className="text-[#005ae2cc]"> Minimag</span>
          </h2>
          <p className="mt-4">
            Minimag Shortener is one of those few outstanding URL shortener you
            would see out there with not just the shortening feature but also
            with additional feature like getting all previous links you have
            shortened with their respective short links.
          </p>
        </div>

        <div className="summary__con mt-6 md:mt-0 md:w-[65%]">
          <WhyMinimagCon
            icon={<MdOutlineInsertLink />}
            title={"URL Shortening"}
            summary={
              "With little to no stress, you can get your short URLs for long links and enjoy better experience personally and with your virtual customers."
            }
          />
          <WhyMinimagCon
            icon={<FaRegEdit />}
            title={"Custom URLs"}
            summary={
              "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
            }
          />
          <WhyMinimagCon
            icon={<PiSquaresFourLight />}
            title={"QR Codes"}
            summary={
              "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution."
            }
          />
          <WhyMinimagCon
            icon={<SiNormalizedotcss />}
            title={"Data Analytics"}
            summary={
              "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."
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
