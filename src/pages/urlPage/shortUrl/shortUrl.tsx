import { useDispatch, useSelector } from "react-redux";
import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { AppDispatch, RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";
import { openModal } from "../../../management/features/link/qrCodeSlice";
import { dropdownList } from "../../../management/features/link/linkDetailsSlice";

const ShortUrl = () => {
  const { shortLinks, dropdownIndex } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );
  const { isModal } = useSelector((store: RootState) => store.QrCodeStore);
  const {
    urls: { fullShortUrl, shortUrl },
  } = useSelector((store: RootState) => store.linkStore);

  const dispatch = useDispatch<AppDispatch>();

  const handleDropdown = (id: string) => {
    // const getFullUrl: string = shortLinks[index].fullUrl;
    // console.log(getFullUrl);
    // console.log(fullShortUrl);
    // dispatch(openModal());
    dispatch(dropdownList(dropdownIndex === id ? null : id));
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
          />
        );
      })}
    </tbody>
  );
};

export default ShortUrl;
