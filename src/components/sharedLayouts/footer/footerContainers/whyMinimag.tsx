import { Link } from "react-router-dom";

const WhyMinimag = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Why Minimag?</h2>
      <ul>
        <li>
          <Link to="/learn-more">Minimag 101</Link>
        </li>
        <li>Integration & API</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
};

export default WhyMinimag;
