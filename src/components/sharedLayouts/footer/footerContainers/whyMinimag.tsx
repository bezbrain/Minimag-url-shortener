import { Link } from "react-router-dom";

const WhyMinimag = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Why Minimag?</h2>
      <ul>
        <li>
          <Link to="">Minimag 101</Link>
        </li>
        <li>
          <Link to="">Integration & API</Link>
        </li>
        <li>
          <Link to="">Pricing</Link>
        </li>
      </ul>
    </div>
  );
};

export default WhyMinimag;
