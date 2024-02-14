import { minimagLogo } from "../../../../assets/logo";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <div className="iPhone:w-1/10">
      <img src={minimagLogo} alt="Minimag" className="w-[150px]" />

      <div className="flex text-xl space-x-4 mt-8">
        <Link to="">
          <FaXTwitter />
        </Link>
        <Link to="">
          <FaInstagram />
        </Link>
        <Link to="">
          <FaLinkedin />
        </Link>
        <Link to="">
          <FaFacebookSquare />
        </Link>
      </div>
    </div>
  );
};

export default Media;
