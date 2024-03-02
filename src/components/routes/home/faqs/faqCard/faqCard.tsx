import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

interface FaqCardProps {
  heading: string;
  content: string;
  handleClick: () => void;
  id: number;
}

const FaqCard = ({ heading, content, handleClick, id }: FaqCardProps) => {
  const { openIndex } = useSelector((store: RootState) => store.faqStore);

  return (
    <div className="border-b-2 border-b-[#99bcf1]">
      <div
        className="cursor-pointer flex items-center justify-between py-2"
        onClick={handleClick}
      >
        <h3 className="font-semibold w-[90%] surfaceDuo:text-xl">{heading}</h3>
        {openIndex === id ? (
          <FaMinus className="surfaceDuo:text-2xl" />
        ) : (
          <FaPlus className="surfaceDuo:text-2xl" />
        )}
      </div>

      {openIndex === id && (
        <p className="pb-2 text-sm surfaceDuo:text-lg">{content}</p>
      )}
    </div>
  );
};

export default FaqCard;
