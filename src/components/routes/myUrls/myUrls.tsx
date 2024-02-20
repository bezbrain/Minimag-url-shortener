import { useEffect } from "react";
import { TableRow } from ".";
import { getLinks } from "../../../management/actions/linkDetails.action";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";

const MyUrls = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getLinks());
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-[10vh] lg:px-8">
      <p>All URLS</p>

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

        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default MyUrls;
