import { Button } from "../../../../general";

const CopyUrl = () => {
  const handleCopyClick = () => {
    //
  };

  return (
    <Button
      content="Copy"
      handleClick={handleCopyClick}
      btnCss="mt-1 rounded-md hover:scale-[1] py-[3px]"
      btnCon="w-[49%]"
    />
  );
};

export default CopyUrl;
