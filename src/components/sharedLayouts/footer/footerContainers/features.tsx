import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Features</h2>
      <ul>
        <li>
          <Link to="/my-urls/custom-urls">Branded Links</Link>
        </li>
        <li>
          <Link to="">Analytics</Link>
        </li>
        <li>
          <Link to="/my-urls/short-urls">QR Code generation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Features;
