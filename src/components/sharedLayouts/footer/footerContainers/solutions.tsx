import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Solutions</h2>
      <ul>
        <li>
          <Link to="">Social Media</Link>
        </li>
        <li>
          <Link to="">Customer Service</Link>
        </li>
        <li>
          <Link to="">For Developers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Solutions;
