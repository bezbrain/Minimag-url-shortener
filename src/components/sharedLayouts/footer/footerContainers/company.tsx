import { Link } from "react-router-dom";

interface CompanyProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Company = ({ setIsComingSoon }: CompanyProps) => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Company</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/learn-more">About Minimag</Link>
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Contact
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Reviews
        </li>
      </ul>
    </div>
  );
};

export default Company;
