import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Legal</h2>
      <ul>
        <li>
          <Link to="">Privacy Policy</Link>
        </li>
        <li>
          <Link to="">Cookies Policy</Link>
        </li>
        <li>
          <Link to="">Terms of Service</Link>
        </li>
        <li>
          <Link to="">Code of Conduct</Link>
        </li>
      </ul>
    </div>
  );
};

export default Legal;
