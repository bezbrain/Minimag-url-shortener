import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";
import { dropdownList } from "../../../management/features/link/linkDetailsSlice";
import { setFullShortLink } from "../../../management/features/link/linkSlice";
import { openModal } from "../../../management/features/link/qrCodeSlice";

const CustomUrl = () => {
  const { cusLinks, dropdownIndex } = useSelector(
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

  const handleDeleteClick = () => {
    //
  };

  if (cusLinks.length === 0) {
    return <NoUrls />;
  }

  return (
    <tbody>
      {cusLinks.map((each, i) => {
        const { createdAt, originalUrl, fullUrl, _id }: any = each;

        return (
          <TableRow
            key={i}
            createdAt={formatDate(createdAt)}
            slicedOriginalUrl={limitOriginalUrl(originalUrl)}
            originalUrl={originalUrl}
            customUrl={fullUrl}
            _id={_id}
            handleDropdown={() => handleDropdown(_id)}
            handleGenCodeClick={() => handleGenCodeClick(i)}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}
    </tbody>
  );
};

export default CustomUrl;
