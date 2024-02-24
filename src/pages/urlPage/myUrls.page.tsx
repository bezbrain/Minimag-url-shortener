import { useDispatch, useSelector } from "react-redux";
import { MyUrls } from "../../components/sharedLayouts";
import { AppDispatch, RootState } from "../../store";
import {
  getCusLinks,
  getLinks,
} from "../../management/actions/linkDetails.action";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { closeDrowdown } from "../../management/features/link/linkDetailsSlice";

const MyUrlsPage = () => {
  const { dropdownIndex } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );
  const dispatch = useDispatch<AppDispatch>();

  const pathname = useLocation().pathname;

  // FETCH SHORT URLS ON CLICK OF 'Short Links'
  const handleFetchShortUrlsClick = () => {
    dispatch(getLinks());
  };

  // FETCH CUSTOM URLS ON CLICK OF 'Custom Links'
  const handleFetchCustomUrlClick = () => {
    dispatch(getCusLinks());
  };

  // CLOSE DROPDOWN WHEN ANY PART OF THIS PAGE IS CLIKED
  const handleCloseDropdownClick = () => {
    if (dropdownIndex) {
      dispatch(closeDrowdown());
    }
  };

  // FETCH DATA WHEN PAGE RELOADS
  useEffect(() => {
    // Fetch data when the component mounts
    if (pathname === "/my-urls/short-urls") {
      dispatch(getLinks());
    } else if (pathname === "/my-urls/custom-urls") {
      dispatch(getCusLinks());
    }
  }, [dispatch, pathname]);

  return (
    <main
      className="pt-[60px] min-h-[100vh]"
      onClick={handleCloseDropdownClick}
    >
      <MyUrls
        handleShortUrlClick={handleFetchShortUrlsClick}
        handleCustomUrlClick={handleFetchCustomUrlClick}
      />
    </main>
  );
};

export default MyUrlsPage;
