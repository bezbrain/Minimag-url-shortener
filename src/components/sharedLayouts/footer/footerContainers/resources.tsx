import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Resources</h2>
      <ul>
        <li>
          <Link to="">Blog</Link>
        </li>
        <li>
          <Link to="">Developers</Link>
        </li>
        <li>
          <Link to="">Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
