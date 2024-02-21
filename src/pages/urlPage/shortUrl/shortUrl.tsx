import { useDispatch, useSelector } from "react-redux";
import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { AppDispatch, RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";
import { openModal } from "../../../management/features/link/qrCodeSlice";

const ShortUrl = () => {
  const { shortLinks } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );
  const { isModal } = useSelector((store: RootState) => store.QrCodeStore);

  const dispatch = useDispatch<AppDispatch>();

  const handleDropdown = (id: string) => {
    console.log(id);
    dispatch(openModal());
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
