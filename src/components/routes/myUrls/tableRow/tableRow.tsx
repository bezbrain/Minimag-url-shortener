import { BsThreeDots } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { TableRowProps } from "../type";
import { Dropdown } from "..";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const TableRow = ({
  _id,
  createdAt,
  originalUrl,
  slicedOriginalUrl,
  shortUrl,
  customUrl,
  handleDropdown,
}: TableRowProps) => {
  const { dropdownIndex } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const pathname = useLocation().pathname;

  return (
    <tr className="border-b-2">
      <td className="py-4 px-2 border-2 w-[15%] text-center font-semibold">
        {createdAt}
      </td>
      <td className="py-4 px-2 border-2 w-[45%]">
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {slicedOriginalUrl}
          {originalUrl !== slicedOriginalUrl ? (
            <span className="font-bold">...</span>
          ) : (
            ""
          )}
        </a>
      </td>

      {pathname === "/my-urls/short-urls" ? (
        <td className="py-4 px-2 border-2 w-[35%]">
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {shortUrl}
          </a>
        </td>
      ) : (
        <td className="py-4 px-2 border-2 w-[35%]">
          <a
            href={customUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {customUrl}
          </a>
        </td>
      )}

      <td className="py-4 px-2 border-2 w-[5%]" onClick={handleDropdown}>
        <BsThreeDots className="cursor-pointer text-2xl ml-auto" />
        {dropdownIndex === _id && <Dropdown />}
      </td>
    </tr>
  );
};

export default TableRow;
