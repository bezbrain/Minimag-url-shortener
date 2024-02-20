import { useDispatch, useSelector } from "react-redux";
import { TableRow } from "../../../components/routes/myUrls";
import { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { getLinks } from "../../../management/actions/linkDetails.action";
import { formatDate } from "../../../utils/convertDate";

const ShortUrl = () => {
  const { shortLinks } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getLinks());
  }, []);

  return (
    <tbody>
      {shortLinks.map((each, i) => {
        const { createdAt, originalUrl, fullUrl }: any = each;
        return (
          <TableRow
            key={i}
            createdAt={formatDate(createdAt)}
            originalUrl={originalUrl}
            shortUrl={fullUrl}
          />
        );
      })}
    </tbody>
  );
};

export default ShortUrl;
