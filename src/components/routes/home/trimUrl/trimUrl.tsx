import styled from "styled-components";
import { InputField } from "../../../general/input";
import { Button } from "../../../general";
import { BsArrowUpShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import {
  urlInput,
  urlSelect,
} from "../../../../management/features/link/linkSlice";
import { ChangeEvent } from "react";

const TrimUrl = () => {
  const { urls, isCustomize } = useSelector(
    (store: RootState) => store.linkStore
  );

  const { originalUrl, fullShortUrl, domainType } = urls;

  const dispatch = useDispatch<AppDispatch>();

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(urlInput({ name, value }));
  };

  const handleDomainSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const urlSelectValue = e.target.value;
    dispatch(urlSelect(urlSelectValue));
  };

  const handleShortUrlClick = () => {
    //
  };

  return (
    <TrimUrlWrapper>
      <div className="max-w-[500px] mx-auto py-12 px-[5vw] bg-white rounded-lg space-y-6 surfaceDuo:p-12">
        <InputField
          inputType={"text"}
          inputPlaceholder={"Paste URL Here"}
          inputValue={originalUrl}
          inputName={"originalUrl"}
          inputCss="text-[#005ae2] placeholder:text-[#005ae2]"
          handleChange={handleUrlChange}
        />

        <div className="gap-0 iPhone:flex iPhone:gap-2">
          <select
            name=""
            value={domainType}
            className="h-[40px] w-full border-[1px] border-[#005ae2] rounded-[6px] focus:border-[#005ae2] focus:border-2 outline-none text-[#005ae2] px-2 cursor-pointer iPhone:w-[50%]"
            onChange={handleDomainSelect}
          >
            <option value="">Choose Domain</option>
            <option value="Minimag.com">Minimag.com</option>
            <option value="Custom Domain">Custom Domain</option>
          </select>

          <div className="mt-6 iPhone:w-[50%] iPhone:mt-0">
            <InputField
              inputType={"text"}
              inputPlaceholder={
                domainType === "" || domainType === "Minimag.com"
                  ? "Your short URL here"
                  : "Type custom URL here"
              }
              inputValue={fullShortUrl}
              inputName={"fullShortUrl"}
              inputCss="text-[#005ae2] placeholder:text-[#005ae2]"
              handleChange={handleUrlChange}
            />
            <p
              className={`text-[#005ae2] text-sm font-semibold ${
                fullShortUrl ? "block" : "hidden"
              }`}
            >
              Click the link to copy
            </p>
          </div>
        </div>

        <Button
          content={"Shorten URL"}
          icon={<BsArrowUpShort className="text-3xl" />}
          btnCss="w-full py-2 rounded-2xl flex-row-reverse"
          handleClick={handleShortUrlClick}
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
