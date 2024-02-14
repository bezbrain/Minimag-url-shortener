import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Features</h2>
      <ul>
        <li>
          <Link to="">Branded Links</Link>
        </li>
        <li>
          <Link to="">Mobile Links</Link>
        </li>
        <li>
          <Link to="">Analytics</Link>
        </li>
        <li>
          <Link to="">QR Code generation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Features;
