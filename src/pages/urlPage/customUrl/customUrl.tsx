import { NoUrls, TableRow } from "../../../components/routes/myUrls";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { formatDate } from "../../../utils/convertDate";
import { limitOriginalUrl } from "../../../utils/limitOriginalUrl";
import { dropdownList } from "../../../management/features/link/linkDetailsSlice";

const CustomUrl = () => {
  const { cusLinks, dropdownIndex } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleDropdown = (id: string) => {
    // const getFullUrl: string = shortLinks[index].fullUrl;
    // console.log(getFullUrl);
    // console.log(fullShortUrl);
    // dispatch(openModal());
    dispatch(dropdownList(dropdownIndex === id ? null : id));
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
          />
        );
      })}
    </tbody>
  );
};

export default CustomUrl;
