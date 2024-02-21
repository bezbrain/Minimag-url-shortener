import { RiDeleteBin6Line, RiAiGenerate } from "react-icons/ri";

const listStyle =
  "text-white py-1 px-1 cursor-pointer hover:bg-slate-400 flex items-center gap-1";

const Dropdown = () => {
  return (
    <ul className="absolute right-2 z-[999] bg-[#005ae2cc] shadow py-2 px-2 rounded-lg">
      <li className={listStyle}>
        <RiAiGenerate />
        Generate QR Code
      </li>
      <li className={listStyle}>
        <RiDeleteBin6Line className="text-red-300" />
        Delete URL
      </li>
    </ul>
  );
};

export default Dropdown;
