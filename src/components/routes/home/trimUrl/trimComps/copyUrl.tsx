import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RootState } from "../../../../../store";
import React from "react";
import {
  setCopy,
  unSetCopy,
} from "../../../../../management/features/link/shortenUrlSlice";

interface CopyUrlProps {
  urlText: string;
}

const CopyUrl = ({ urlText }: CopyUrlProps) => {
  const { isCopy } = useSelector((store: RootState) => store.shortenUrlStore);

  const dispatch = useDispatch();

  const handleCopyClick = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCopy());
    setTimeout(() => {
      dispatch(unSetCopy());
    }, 2000);
  };

  return (
    <CopyToClipboard text={urlText}>
      <button
        className="mt-1 rounded-md hover:scale-[1] py-[3px] bg-[#005ae2cc] w-[49%] text-white"
        onClick={handleCopyClick}
      >
        {isCopy ? (
          <IoCheckmarkDoneOutline className="mx-auto text-2xl font-bold" />
        ) : (
          "Copy"
        )}
      </button>
    </CopyToClipboard>
  );
};

export default CopyUrl;
