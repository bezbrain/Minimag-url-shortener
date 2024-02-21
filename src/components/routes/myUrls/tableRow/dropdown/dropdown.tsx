import { RiDeleteBin6Line, RiAiGenerate } from "react-icons/ri";

interface DropdownProps {
  handleGenCodeClick: () => void;
  handleDeleteClick: () => void;
}

const listStyle =
  "text-white py-1 px-1 cursor-pointer hover:bg-slate-400 flex items-center gap-1";

const Dropdown = ({ handleGenCodeClick, handleDeleteClick }: DropdownProps) => {
  return (
    <ul className="absolute right-2 z-[999] bg-[#005ae2cc] shadow-slate-500 shadow-lg py-2 px-2 rounded-lg">
      <li className={listStyle} onClick={handleGenCodeClick}>
        <RiAiGenerate />
        Generate QR Code
      </li>
      <li className={listStyle} onClick={handleDeleteClick}>
        <RiDeleteBin6Line className="text-red-300" />
        Delete URL
      </li>
    </ul>
  );
};

export default Dropdown;
