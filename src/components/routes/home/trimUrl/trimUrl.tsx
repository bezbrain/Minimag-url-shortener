import styled from "styled-components";
import { InputField } from "../../../general/input";
import { Button } from "../../../general";
import { BsArrowUpShort } from "react-icons/bs";

const TrimUrl = () => {
  const handleUrlChange = () => {
    //
  };

  return (
    <TrimUrlWrapper>
      <div className="max-w-[500px] mx-auto py-12 px-[5vw] bg-white rounded-lg space-y-6 surfaceDuo:p-12">
        <InputField
          inputType={"text"}
          inputPlaceholder={"Paste URL Here"}
          inputValue={""}
          inputName={""}
          inputCss="text-[#005ae2] placeholder:text-[#005ae2]"
          handleChange={handleUrlChange}
        />

        <div className="gap-0 iPhone:flex iPhone:gap-2">
          <select
            name=""
            id=""
            className="h-[40px] w-full border-[1px] border-[#005ae2] rounded-[6px] focus:border-[#005ae2] focus:border-2 outline-none text-[#005ae2] px-2 cursor-pointer iPhone:w-[50%]"
          >
            <option value="">Choose Domain</option>
            <option value="">Minimag.com</option>
            <option value="">Custom Domain</option>
          </select>

          <InputField
            inputType={"text"}
            inputPlaceholder={"Type custom URL here"}
            inputValue={""}
            inputName={""}
            inputStyle="mt-6 iPhone:w-[50%] iPhone:mt-0"
            inputCss="text-[#005ae2] placeholder:text-[#005ae2]"
            handleChange={handleUrlChange}
          />
        </div>

        <Button
          content={"Shorten URL"}
          icon={<BsArrowUpShort className="text-3xl" />}
          btnCss="w-full py-2 rounded-2xl flex-row-reverse"
        />

        <p className="text-[#005ae2] text-xs">
          By clicking <span className="font-semibold">Shorten URL</span>, I
          agree to the <span className="font-semibold">Terms of Service</span>,{" "}
          <span className="font-semibold">Privacy Policy</span> and Use of
          Cookies.
        </p>
      </div>
    </TrimUrlWrapper>
  );
};

export default TrimUrl;

const TrimUrlWrapper = styled.form`
  background: radial-gradient(#304a63, #e2e0e0);
  padding: 5rem 1rem;
`;
