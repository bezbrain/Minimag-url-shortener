import { Button } from "../../../../general";

const GenerateQR = () => {
  const handleQRCodeClick = () => {
    //
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
