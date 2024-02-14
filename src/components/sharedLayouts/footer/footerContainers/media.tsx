import { minimagLogo } from "../../../../assets/logo";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Media = () => {
  return (
    <div>
      <img src={minimagLogo} alt="Minimag" className="w-[150px]" />
      <div>
        <FaXTwitter />
        <FaInstagram />
        <FaLinkedin />
        <FaFacebookSquare />
      </div>

      <div>{/*  */}</div>
    </div>
  );
};

export default Media;
