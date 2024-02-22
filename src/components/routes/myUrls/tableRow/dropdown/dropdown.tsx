import { RiDeleteBin6Line, RiAiGenerate } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

interface DropdownProps {
  handleGenCodeClick: () => void;
  handleDeleteClick: () => void;
}

const listStyle =
  "text-white py-1 px-1 hover:bg-slate-400 flex items-center gap-1";

const Dropdown = ({ handleGenCodeClick, handleDeleteClick }: DropdownProps) => {
  const { isDeleteLoading } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  return (
    <ul className="absolute right-2 top-14 w-[200px] z-[999] bg-[#005ae2cc] shadow-slate-500 shadow-lg py-2 px-2 rounded-lg">
      <li
        className={`cursor-pointer ${listStyle}`}
        onClick={handleGenCodeClick}
      >
        <RiAiGenerate />
        Generate QR Code
      </li>
      <li
        className={`${listStyle} ${
          isDeleteLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={handleDeleteClick}
      >
        <RiDeleteBin6Line className="text-red-300" />
        Delete URL
      </li>
    </ul>
  );
};

export default Dropdown;
