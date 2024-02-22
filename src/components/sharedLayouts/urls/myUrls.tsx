import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../../../store";
import { Loader } from "../../helpers";
import styled from "styled-components";

interface MyUrlsProps {
  handleShortUrlClick: () => void;
  handleCustomUrlClick: () => void;
}

const MyUrls = ({ handleShortUrlClick, handleCustomUrlClick }: MyUrlsProps) => {
  const { isLoading } = useSelector(
    (store: RootState) => store.linkDetailsStore
  );

  const pathname = useLocation().pathname;

  return (
    <MyUrlsWrapper className="max-w-[1400px] mx-auto px-4 py-[10vh] lg:px-8">
      <p>All URLS</p>

      <div className="w-fit text-[#005ae2cc] text-xl font-semibold flex gap-8 my-4">
        <Link
          to="/my-urls/short-urls"
          className={`border-[#005ae2cc] ${
            pathname == "/my-urls/short-urls" ? "border-b-2" : ""
          }`}
          onClick={handleShortUrlClick}
        >
          Short Links
        </Link>
        <Link
          to="/my-urls/custom-urls"
          className={`border-[#005ae2cc] ${
            pathname == "/my-urls/custom-urls" ? "border-b-2" : ""
          }`}
          onClick={handleCustomUrlClick}
        >
          Custom Links
        </Link>
      </div>

      <div className="table__container">
        {isLoading ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr className="text-center">
                <th>Date Created</th>
                <th>Original Links</th>
                {pathname == "/my-urls/short-urls" ? (
                  <th>Short Link</th>
                ) : (
                  <th>Custom Link</th>
                )}
                <th></th>
              </tr>
            </thead>

            <Outlet />
          </table>
        )}
      </div>
    </MyUrlsWrapper>
  );
};

export default MyUrls;

const MyUrlsWrapper = styled.div`
  .table__container {
    width: 100%;
  }

  .table__container table {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    .table__container {
      overflow-x: auto;
    }

    .table__container table {
      width: 950px;
      overflow-x: auto;
    }
  }
`;
