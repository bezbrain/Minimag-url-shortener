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
import { LinkBtn } from "../../general";
import { getAuthToken } from "../../../utils/authToken";
import { useRef } from "react";
import { logout } from "../../../management/actions/auth";

const Nav = () => {
  const { isOpen } = useSelector((store: RootState) => store.sharedStore);
  const { isLoading, isDisable } = useSelector(
    (store: RootState) => store.logoutStore
  );

  const loginLogout = useRef<HTMLAnchorElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate: NavigateFunction = useNavigate();

  const handleOpenNavClick = () => {
    dispatch(isOpenNav());
  };

  const handleCloseNavClick = () => {
    dispatch(isCloseNav());
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

  return (
    <HeaderWrapper>
      <div className="w-[120px] iPad:w-[10%]">
        <Link to="/" className="z-50">
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
        <TiTimesOutline
          className="absolute right-[5vw] top-[15px] text-3xl iPad:hidden cursor-pointer text-white"
          onClick={handleCloseNavClick}
        />

        <ul
          className={`first__nav__items space-y-4 font-semibold iPad:space-y-0`}
        >
          <li>
            <Link to="">My URLs</Link>
          </li>
          <li>
            <Link to="">Features</Link>
          </li>
          <li>
            <Link to="">Pricing</Link>
          </li>
          <li>
            <Link to="">Analytics</Link>
          </li>
          <li>
            <Link to="">FAQs</Link>
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
              onClick={handleLogoutClick}
              ref={loginLogout}
            >
              {getAuthToken() ? (isLoading ? "Wait..." : "Logout") : "Log in"}
            </Link>
          </li>
          <li>
            <LinkBtn btnContent="Try for free" />
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Nav;
