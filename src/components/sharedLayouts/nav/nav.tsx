import { minimagLogo } from "../../../assets/logo";
import { Link } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { TiTimesOutline } from "react-icons/ti";
import { HeaderWrapper } from "./navStyles";

const Nav = () => {
  return (
    <HeaderWrapper>
      <div className="w-[120px] iPad:w-[10%] iPad:">
        <Link to="/">
          <img src={minimagLogo} alt="Logo" className="w-full" />
        </Link>
        <FaBarsProgress className="absolute right-[5vw] top-[10px] text-2xl iPad:hidden cursor-pointer text-white" />
      </div>

      <nav className="flex justify-items-start lg:w-[75%] iPad:justify-between">
        <TiTimesOutline className="absolute right-[5vw] top-[10px] text-3xl iPad:hidden cursor-pointer" />

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
            <Link to="" className="iPad:text-blue-600">
              Log in
            </Link>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl">
              Try for free
            </button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Nav;
