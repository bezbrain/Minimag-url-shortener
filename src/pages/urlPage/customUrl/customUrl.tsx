import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";

const CustomUrl = () => {
  const { cusLinks } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  if (cusLinks.length === 0) {
    return <NoUrls />;
  }

  return (
    <tbody>
      {cusLinks.map((each, i) => {
        const { createdAt, originalUrl, fullUrl }: any = each;

        return (
          <TableRow
            key={i}
            createdAt={formatDate(createdAt)}
            slicedOriginalUrl={limitOriginalUrl(originalUrl)}
            originalUrl={originalUrl}
            customUrl={fullUrl}
          />
        );
      })}
    </tbody>
  );
};

export default CustomUrl;
