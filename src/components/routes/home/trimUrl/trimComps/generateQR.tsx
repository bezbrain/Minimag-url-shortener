import React from "react";
import { Button } from "../../../../general";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { openModal } from "../../../../../management/features/link/qrCodeSlice";
import { toast } from "react-toastify";

const GenerateQR = () => {
  const {
    urls: { fullShortUrl },
  } = useSelector((store: RootState) => store.linkStore);
  const dispatch = useDispatch<AppDispatch>();

  const handleQRCodeClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullShortUrl.startsWith("https")) {
      toast.error("Custom URL not in right format");
    } else {
      dispatch(openModal());
    }
  };

  return (
    <Button
      content="QR Code"
      handleClick={handleQRCodeClick}
      btnCss="mt-1 rounded-md hover:scale-[1] py-[3px]"
      btnCon="w-[49%]"
    />
  );
};

export default GenerateQR;
