import { useSelector } from "react-redux";
import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";

const ShortUrl = () => {
  const { shortLinks } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  if (shortLinks.length === 0) {
    return <NoUrls />;
  }

  return (
    <tbody>
      {shortLinks.map((each, i) => {
        const { createdAt, originalUrl, fullUrl }: any = each;

        return (
          <TableRow
            key={i}
            createdAt={formatDate(createdAt)}
            originalUrl={originalUrl}
            slicedOriginalUrl={limitOriginalUrl(originalUrl)}
            shortUrl={fullUrl}
          />
        );
      })}
    </tbody>
  );
};

export default ShortUrl;
