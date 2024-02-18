import styled from "styled-components";
import { InputField } from "../../../general/input";
import { Button } from "../../../general";
import { BsArrowUpShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import {
  originalUrlInput,
  shortUrlInput,
  urlSelect,
} from "../../../../management/features/link/linkSlice";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import {
  createCusLink,
  createLink,
} from "../../../../management/actions/link.action";
import { getAuthToken } from "../../../../utils/authToken";

const TrimUrl = () => {
  const { urls, isCustomize, isLoading, isDisable } = useSelector(
    (store: RootState) => store.linkStore
  );

  const { originalUrl, fullShortUrl, domainType } = urls;

  const dispatch = useDispatch<AppDispatch>();

  const handleDomainSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const urlSelectValue = e.target.value;
    dispatch(urlSelect(urlSelectValue));
  };

  const handleShortUrlClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl) {
      toast.error("Please paste URL that needs to be shortened");
    } else if (!originalUrl.startsWith("http")) {
      toast.error("URL must start with http");
    } else if (!domainType) {
      toast.error("Choose Domain type");
    } else if (!getAuthToken()) {
      toast.error("Please login to use service");
    } else if (domainType === "Minimag.com" && getAuthToken()) {
      dispatch(createLink(originalUrl));
    } else if (domainType === "Custom Domain" && getAuthToken()) {
      dispatch(createCusLink({ originalUrl, fullShortUrl }));
    }
  };

  return (
    <TrimUrlWrapper id="features" className="my-20">
      <div className="form__container max-w-[500px] mx-auto py-12 px-[5vw] bg-white rounded-lg space-y-6 surfaceDuo:p-12">
        <InputField
          inputType={"text"}
          inputPlaceholder={"Paste URL Here"}
          inputValue={originalUrl}
          inputName={"originalUrl"}
          inputCss="text-[#005ae2] placeholder:text-[#005ae2]"
          handleChange={(e) => dispatch(originalUrlInput(e.target.value))}
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
                domainType === "Custom Domain"
                  ? "Type custom URL here"
                  : "Your short URL here"
              }
              inputValue={fullShortUrl}
              inputName={"fullShortUrl"}
              inputCss="text-[#005ae2] placeholder:text-[#005ae2]"
              handleChange={(e) => dispatch(shortUrlInput(e.target.value))}
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
          content={
            isLoading
              ? "Generating..."
              : domainType === "Custom Domain"
              ? "Customize URL"
              : "Shorten URL"
          }
          icon={<BsArrowUpShort className="text-3xl" />}
          btnCss={`w-full py-2 rounded-2xl flex-row-reverse ${
            isDisable ? "cursor-not-allowed" : ""
          }`}
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

  .form__container {
    animation: scaleInOut ease-in-out 2s infinite;
  }

  @keyframes scaleInOut {
    0% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }

  .form__container:hover {
    animation: none;
    transform: scale(1);
  }
`;
