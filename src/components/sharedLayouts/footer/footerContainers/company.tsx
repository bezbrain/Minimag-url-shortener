import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Company</h2>
      <ul>
        <li>
          <Link to="">About Minimag</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
        <li>
          <Link to="">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default Company;
