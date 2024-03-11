import { minimagLogo } from "../../../assets/logo";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { TiTimesOutline } from "react-icons/ti";
import { HeaderWrapper } from "./navStyles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  isCloseNav,
  isOpenNav,
} from "../../../management/features/shared/sharedSlice";
import { getAuthToken } from "../../../utils/authToken";
import { useRef } from "react";
import { logout } from "../../../management/actions/auth";
import { getLinks } from "../../../management/actions/linkDetails.action";
import { toast } from "react-toastify";

const Nav = () => {
  const { isOpen } = useSelector((store: RootState) => store.sharedStore);
  const { isLoading, isDisable } = useSelector(
    (store: RootState) => store.logoutStore
  );

  const loginLogout = useRef<HTMLAnchorElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate: NavigateFunction = useNavigate();

  // OPEN NAV BAR
  const handleOpenNavClick = () => {
    dispatch(isOpenNav());
  };

  const handleLogoClick = () => {
    dispatch(isCloseNav());
    window.scrollTo(0, 0);
  };

  // LOGOUT A USER
  const handleLogoutClick = () => {
    dispatch(isCloseNav());
    if (loginLogout.current?.textContent === "Log in") {
      navigate("/login");
    } else {
      dispatch(logout(navigate));
    }
  };

  const handleEmpty = () => {
    return;
  };

  // FETCH SHORT URLS ON CLICK OF 'My URLs' nav item
  const handleFetchShortUrlsClick = () => {
    dispatch(isCloseNav());
    if (getAuthToken()) {
      dispatch(getLinks());
    } else {
      noToken();
    }
  };

  const noToken = () => {
    if (!getAuthToken()) {
      toast.error("Please login to access this page");
    }
  };

  return (
    <HeaderWrapper>
      <div className="w-[120px] iPad:w-[10%]">
        <Link to="/" className="z-50" onClick={handleLogoClick}>
          <img src={minimagLogo} alt="Logo" className="w-full" />
        </Link>
        <FaBarsProgress
          className={`absolute right-[5vw] top-[15px] text-2xl iPad:hidden cursor-pointer ${
            isOpen ? "add__color" : ""
          }`}
          onClick={handleOpenNavClick}
        />
      </div>

      <nav
        className={`flex justify-items-start lg:w-[75%] iPad:justify-between ${
          isOpen ? "add__nav" : ""
        }`}
      >
        <TiTimesOutline className="absolute right-[5vw] top-[15px] text-3xl iPad:hidden cursor-pointer text-white" />

        <ul
          className={`first__nav__items space-y-4 font-semibold iPad:space-y-0`}
        >
          <li>
            <Link
              to={getAuthToken() ? "/my-urls/short-urls" : ""}
              onClick={handleFetchShortUrlsClick}
            >
              My URLs
            </Link>
          </li>
          <li>
            <a href="/#features">Features</a>
          </li>
          <li>
            <a href="/#pricing">Pricing</a>
          </li>
          <li>
            <Link to={getAuthToken() ? "/analytics" : ""} onClick={noToken}>
              Analytics
            </Link>
          </li>
          <li>
            <a href="/#faq">FAQs</a>
          </li>
        </ul>

        <ul
          className={`second__nav__items space-y-4 font-semibold iPad:space-y-0`}
        >
          <li>
            <Link
              to={getAuthToken() ? "" : "/login"}
              className={`iPad:text-blue-600 ${
                isDisable ? "cursor-not-allowed" : ""
              }`}
              onClick={isDisable ? handleEmpty : handleLogoutClick}
              ref={loginLogout}
            >
              {getAuthToken() ? (isLoading ? "Wait..." : "Logout") : "Log in"}
            </Link>
          </li>
          <li>
            <a
              href="/#features"
              className="bg-[#005ae2cc] px-[1.5rem] py-[0.5rem] text-[#fff] block hover:scale-[1.05] hover:border-none rounded-[1.5rem]"
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Nav;
