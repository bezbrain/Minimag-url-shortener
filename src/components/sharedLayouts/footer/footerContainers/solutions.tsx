import { Link } from "react-router-dom";

interface SolutionsProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Solutions = ({ setIsComingSoon }: SolutionsProps) => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Solutions</h2>
      <ul className="space-y-2">
        <li>
          <Link to="">Social Media</Link>
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Customer Service
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          For Developers
        </li>
      </ul>
    </div>
  );
};

export default Solutions;
