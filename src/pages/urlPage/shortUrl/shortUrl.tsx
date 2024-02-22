import { useDispatch, useSelector } from "react-redux";
import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { AppDispatch, RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";
import { openModal } from "../../../management/features/link/qrCodeSlice";
import { dropdownList } from "../../../management/features/link/linkDetailsSlice";
import { setFullShortLink } from "../../../management/features/link/linkSlice";
import {
  deleteShort,
  getLinks,
} from "../../../management/actions/linkDetails.action";

const ShortUrl = () => {
  const { shortLinks, dropdownIndex, isDeleteLoading } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const dispatch = useDispatch<AppDispatch>();

  // FUNCTION TO DISPLAY DROPDOWN LIST
  const handleDropdown = (id: string) => {
    dispatch(dropdownList(dropdownIndex === id ? null : id));
  };

  // FUNCTION TO PROVIDE THE VALUES OF FULLURL AND SHORTURL WHILE ON THE SHORT URL PAGE
  const handleGenCodeClick = (index: number) => {
    const getFullUrl: string = shortLinks[index].fullUrl;
    const getShortUrl: string = shortLinks[index].shortUrl;
    dispatch(setFullShortLink({ getFullUrl, getShortUrl }));
    dispatch(openModal());
  };

  // FUNCTION TO DELETE SHORT LINK
  const handleDeleteClick = (id: string) => {
    if (isDeleteLoading) {
      return null;
    }
    dispatch(deleteShort(id));
    dispatch(getLinks()); // Call the get all short links function to get the latest data in the db
  };

  if (shortLinks.length === 0) {
    return <NoUrls />;
  }

  return (
    <tbody>
      {shortLinks.map((each, i) => {
        const { _id, createdAt, originalUrl, fullUrl }: any = each;

        return (
          <TableRow
            key={i}
            createdAt={formatDate(createdAt)}
            originalUrl={originalUrl}
            slicedOriginalUrl={limitOriginalUrl(originalUrl)}
            shortUrl={fullUrl}
            handleDropdown={() => handleDropdown(_id)}
            _id={_id}
            handleGenCodeClick={() => handleGenCodeClick(i)}
            handleDeleteClick={() => handleDeleteClick(_id)}
          />
        );
      })}
    </tbody>
  );
};

export default ShortUrl;
