import { Link } from "react-router-dom";

interface WhyMinimagProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhyMinimag = ({ setIsComingSoon }: WhyMinimagProps) => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Why Minimag?</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/learn-more">Minimag 101</Link>
        </li>
        <li>Integration & API</li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Pricing
        </li>
      </ul>
    </div>
  );
};

export default WhyMinimag;
