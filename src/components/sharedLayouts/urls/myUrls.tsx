import { useEffect } from "react";
import { TableRow } from "../../routes/myUrls";
import { getLinks } from "../../../management/actions/linkDetails.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { Link, Outlet } from "react-router-dom";

const MyUrls = () => {
  const { links } = useSelector((store: RootState) => store.linkDetailsStore);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getLinks());
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-[10vh] lg:px-8">
      <p>All URLS</p>

      <div className="w-fit border-2">
        <Link to="/my-urls/short-urls">Short Links</Link>
        <Link to="/my-urls/custom-urls">Custom Links</Link>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-center">
            <th>Date Created</th>
            <th>Original Links</th>
            <th>Short Link</th>
            <th>Custom Link</th>
            <th></th>
          </tr>
        </thead>

        <Outlet />
      </table>
    </div>
  );
};

export default MyUrls;
