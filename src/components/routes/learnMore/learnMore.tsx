import styled from "styled-components";
import {
  QRCodeImg,
  copyAndQrCode,
  manipulateUrl,
} from "../../../assets/images";

const LearnMore = () => {
  return (
    <LearnMoreWrapper className="max-w-[1400px] p-4 mx-auto py-16 text-lg">
      <header className="flex items-center flex-col gap-4 iPadAir:flex-row">
        <p>
          Minimag is an innovative URL shortening and customization platform,
          where we empower you to{" "}
          <span className="text-[#005ae2cc] font-semibold">simplify</span> and
          <span className="text-[#005ae2cc] font-semibold"> personalize </span>
          your links effortlessly. Whether you're sharing content, promoting
          campaigns, or optimizing your online presence, our tool offers
          unparalleled flexibility and control over your shortened URLs, helping
          you enhance branding, track engagement, and maximize impact across all
          your digital channels.
        </p>
        <img
          src="https://th.bing.com/th?id=OIP.Qzr0T9YS_P4kEIq639zCyAHaHP&w=252&h=247&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt=""
        />
      </header>

      <h2 className="text-3xl my-8 text-center surfaceDuo:text-left">
        How it works
      </h2>
      <p className="max-w-[500px]">
        The general prerequisite is to have an account. To use any of{" "}
        <span className="text-[#005ae2cc]">minimag</span> link manipulation
        feature, you must have an account and stay logged in.
      </p>

      <div className="flex mt-8 items-center gap-8 flex-col iPadAir:flex-row">
        <ul>
          <li className="leading-[20px]">
            Click the "Features" in the nav section and you will be scrolled
            down to where you can manipulate your URL.
          </li>
          <li className="mt-[12px] leading-[20px]">
            You will have to insert the long URL you want to shorten or
            customize. Please, make sure the long URL has the "https" in it
          </li>
          <li className="mt-[12px] leading-[20px]">
            Then you have the option to shorten URL by selecting{" "}
            <span className="font-semibold">Minimag.com</span> or customize URL
            by selecting <span className="font-semibold">Custom Domain</span>
          </li>
          <li className="mt-[12px] leading-[20px]">
            If you select "Minimag.com", when you click the button to generate
            URL, the generated short url will be provided in the next input box
            to your right
          </li>
          <li className="mt-[12px] leading-[20px]">
            If you select "Custom Domain", you will be required to type the name
            of your brand in the input box to your right. Please, just the name.
            When you click the button to generate URL, the generated custom url
            will be provided in the next input box to your right
          </li>
        </ul>
        <img
          src={manipulateUrl}
          alt="Url UI"
          className="w-full rounded-md iPadAir:w-1/2 xl:w-full"
        />
      </div>

      <div className="my-12 items-center gap-8 flex flex-col iPadAir:flex-row-reverse">
        <ul>
          <li className="leading-[20px]">
            As soon as there is a text in the input box to your right, the two
            buttons "copy" and "QR Code" display.
          </li>
          <li className="my-4 leading-[20px]">
            The copy button allows you to copy the URL (shortened or customized)
            while the QR Code button allows you generate QR code for you current
            shortened or customized URL. The QR code can be downloaded on you
            device for later usage
          </li>
          <li className="w-fit mx-auto">
            <img src={QRCodeImg} alt="QR Code" className="h-[200px]" />
          </li>
        </ul>
        <img
          src={copyAndQrCode}
          alt="Url UI"
          className="w-full rounded-md iPadAir:w-1/2 xl:w-full"
        />
      </div>
    </LearnMoreWrapper>
  );
};

export default LearnMore;

const LearnMoreWrapper = styled.div`
  > header > img {
    border-radius: 40%;
    animation: howItWorksImg ease-in-out 3s infinite;
  }

  @keyframes howItWorksImg {
    25% {
      transform: scale(1.05);
    }
    50% {
    }
    100% {
      transform: scale(1);
    }
  }
`;
