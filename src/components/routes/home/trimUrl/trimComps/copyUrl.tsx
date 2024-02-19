import { Button } from "../../../../general";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CopyUrlProps {
  urlText: string;
}

const CopyUrl = ({ urlText }: CopyUrlProps) => {
  const handleCopyClick = () => {
    //
  };

  return (
    <CopyToClipboard text={urlText}>
      <Button
        content="Copy"
        handleClick={handleCopyClick}
        btnCss="mt-1 rounded-md hover:scale-[1] py-[3px]"
        btnCon="w-[49%]"
      />
    </CopyToClipboard>
  );
};

export default CopyUrl;
