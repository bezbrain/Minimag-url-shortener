import styled from "styled-components";
import QRCode from "qrcode.react";

const QrCode = () => {
  return (
    <QrCodeWrapper>
      <div className="bg-white w-[500px] h-[300px] flex justify-center items-center">
        <QRCode
          value="https://minimag.onrender.com/sssdd"
          size={200} // setting the size to 200 pixels
          bgColor="#f8f8f8" // light grey background
          fgColor="#333333" // dark grey foreground
          level="H" // high error correction level
          //   style={{ paddingBlock: "3rem" }}
        />
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
