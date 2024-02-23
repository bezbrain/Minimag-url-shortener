// import { Link } from "react-router-dom";

interface ResourcesProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Resources = ({ setIsComingSoon }: ResourcesProps) => {
  return (
    <div className="">
      <h2 className="font-semibold text-lg mb-2">Resources</h2>
      <ul>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Blog
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Developers
        </li>
        <li className="cursor-pointer" onClick={() => setIsComingSoon(true)}>
          Support
        </li>
      </ul>
    </div>
  );
};

export default Resources;
