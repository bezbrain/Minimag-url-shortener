import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";
import { dropdownList } from "../../../management/features/link/linkDetailsSlice";
import { setFullShortLink } from "../../../management/features/link/linkSlice";
import { openModal } from "../../../management/features/link/qrCodeSlice";
import {
  deleteCustom,
  getCusLinks,
} from "../../../management/actions/linkDetails.action";

const CustomUrl = () => {
  const { cusLinks, dropdownIndex, isDeleteLoading } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const dispatch = useDispatch<AppDispatch>();

  // FUNCTION TO DISPLAY DROPDOWN LIST
  const handleDropdown = (id: string) => {
    dispatch(dropdownList(dropdownIndex === id ? null : id));
  };

  // FUNCTION TO PROVIDE THE VALUES OF FULLURL AND SHORTURL WHILE ON THE SHORT URL PAGE
  const handleGenCodeClick = (index: number) => {
    const getFullUrl: string = cusLinks[index].fullUrl;
    const getShortUrl: string = cusLinks[index].shortUrl;
    dispatch(setFullShortLink({ getFullUrl, getShortUrl }));
    dispatch(openModal());
  };

  // FUNCTION TO DELETE SHORT LINK
  const handleDeleteClick = async (id: string) => {
    if (isDeleteLoading) {
      return null;
    }
    await dispatch(deleteCustom(id));
    dispatch(getCusLinks()); // Call the get all custom links function to get the latest data in the db
  };

  if (cusLinks.length === 0) {
    return <NoUrls />;
  }

  return (
    <tbody>
      {cusLinks.map((each, i) => {
        const { createdAt, originalUrl, fullUrl, shortUrl, _id }: any = each;

        return (
          <TableRow
            key={i}
            createdAt={formatDate(createdAt)}
            slicedOriginalUrl={limitOriginalUrl(originalUrl)}
            originalUrl={originalUrl}
            customUrl={fullUrl}
            short={shortUrl}
            _id={_id}
            handleDropdown={() => handleDropdown(_id)}
            handleGenCodeClick={() => handleGenCodeClick(i)}
            handleDeleteClick={() => handleDeleteClick(_id)}
          />
        );
      })}
    </tbody>
  );
};

export default CustomUrl;
