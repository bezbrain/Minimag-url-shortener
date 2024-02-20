import { BsThreeDots } from "react-icons/bs";
import { useLocation } from "react-router-dom";

interface TableRowProps {
  createdAt: string;
  originalUrl: string;
  shortUrl: string;
  customUrl: string;
}

const TableRow = ({
  createdAt,
  originalUrl,
  shortUrl,
  customUrl,
}: TableRowProps) => {
  const pathname = useLocation().pathname;

  return (
    <tr className="border-b-2">
      <td className="py-4 px-2 border-2 w-[10%]">{createdAt}</td>
      <td className="py-4 px-2 border-2 w-[50%]">
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {originalUrl}
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

      <td className="py-4 px-2 border-2 w-[5%]">
        <BsThreeDots className="cursor-pointer text-2xl ml-auto" />
      </td>
    </tr>
  );
};

export default TableRow;
