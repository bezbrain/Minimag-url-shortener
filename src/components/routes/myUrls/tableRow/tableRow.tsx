import { BsThreeDots } from "react-icons/bs";

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
  return (
    <tr className="border-b-2">
      <td className="py-4 px-2 border-2 w-[10%]">{createdAt}</td>
      <td className="py-4 px-2 border-2 w-[35%]">
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {originalUrl}
        </a>
      </td>
      <td className="py-4 px-2 border-2 w-[25%]">
        <a
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {shortUrl}
        </a>
      </td>
      <td className="py-4 px-2 border-2 w-[25%]">
        <a
          href={customUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {customUrl}
        </a>
      </td>
      <td className="py-4 px-2 border-2 w-[5%]">
        <BsThreeDots className="cursor-pointer text-2xl ml-auto" />
      </td>
    </tr>
  );
};

export default TableRow;
