import styled from "styled-components";
import QRCode from "qrcode.react";
import { Button } from "../../../../general";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { closeModal } from "../../../../../management/features/link/qrCodeSlice";

const QrCode = () => {
  const {
    urls: { fullShortUrl, shortUrl },
  } = useSelector((store: RootState) => store.linkStore);

  const dispatch = useDispatch<AppDispatch>();

  //   FUNCTION TO DOWNLOAD THE QRCODE
  const handleDownloadQRClick = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      toast.error("Something went wrong. Please again later!");
      return;
    }
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `${shortUrl}.png`;
    link.href = url;
    link.click();
  };

  return (
    <QrCodeWrapper>
      <div className="bg-white w-[500px] h-[300px] flex justify-center items-center flex-col relative">
        <FaTimes
          className="absolute text-5xl text-red-700 -top-12 right-0 cursor-pointer"
          onClick={() => dispatch(closeModal())}
        />

        <QRCode
          value={fullShortUrl}
          size={200}
          bgColor="#f8f8f8"
          fgColor="#333333"
          level="H" // high error correction level
        />

        <Button content="Download" handleClick={handleDownloadQRClick} />
      </div>
    </QrCodeWrapper>
  );
};

export default QrCode;

const QrCodeWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;
