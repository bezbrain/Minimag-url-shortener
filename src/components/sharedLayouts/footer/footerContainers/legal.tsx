// import { Link } from "react-router-dom";

interface LegalProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Legal = ({ setIsComingSoon }: LegalProps) => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Legal</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Privacy Policy
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Cookies Policy
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Terms of Service
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Code of Conduct
        </li>
      </ul>
    </div>
  );
};

export default Legal;
