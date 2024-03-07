import { BsThreeDots } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { TableRowProps } from "../type";
import { Dropdown } from "..";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { eventFunction } from "../../../../utils/firebase/firebaseConfig";
import { useEffect } from "react";

const TableRow = ({
  _id,
  createdAt,
  originalUrl,
  slicedOriginalUrl,
  shortUrl,
  // short,
  customUrl,
  handleDropdown,
  handleGenCodeClick,
  handleDeleteClick,
}: TableRowProps) => {
  const { dropdownIndex } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const pathname = useLocation().pathname;

  // FUNCTION TO LOG EVENT WHEN SHORTURL IS VISITED
  const logShortUrlVisitEvent = () => {
    eventFunction(`shortUrlVisited`);
  };
  // FUNCTION TO LOG EVENT WHEN CUSTOMURL IS VISITED
  const logCustomUrlVisitEvent = () => {
    eventFunction(`CustomUrlVisited`);
  };

  useEffect(() => {
    // Attach event listener to shortUrl anchor tag
    const shortUrlAnchor = document.getElementById(`short-url-${_id}`);
    if (shortUrlAnchor) {
      shortUrlAnchor.addEventListener("click", logShortUrlVisitEvent);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (shortUrlAnchor) {
        shortUrlAnchor.removeEventListener("click", logShortUrlVisitEvent);
      }
    };
  }, [_id]);

  useEffect(() => {
    // Attach event listener to customUrl anchor tag
    const customUrlAnchor = document.getElementById(`custom-url-${_id}`);
    if (customUrlAnchor) {
      customUrlAnchor.addEventListener("click", logCustomUrlVisitEvent);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (customUrlAnchor) {
        customUrlAnchor.removeEventListener("click", logCustomUrlVisitEvent);
      }
    };
  }, [_id]);

  return (
    <tr className="border-b-2">
      <td className="py-4 px-2 w-[15%] text-center">{createdAt}</td>
      <td className="py-4 px-2 w-[45%] text-center">
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
        <td className="py-4 px-2 w-[35%] text-center">
          <a
            id={`short-url-${_id}`}
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {shortUrl}
          </a>
        </td>
      ) : (
        <td className="py-4 px-2 w-[35%] text-center">
          <a
            id={`custom-url-${_id}`}
            href={customUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {customUrl}
          </a>
        </td>
      )}

      <td className="py-4 px-2 w-[5%] relative" onClick={handleDropdown}>
        <BsThreeDots className="cursor-pointer text-2xl ml-auto" />
        {dropdownIndex === _id && (
          <Dropdown
            handleGenCodeClick={handleGenCodeClick}
            handleDeleteClick={handleDeleteClick}
          />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
