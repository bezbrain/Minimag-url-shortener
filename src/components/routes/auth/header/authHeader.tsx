import { Button } from "../../../general";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

interface AuthHeaderProps {
  authHeaderContent: string;
}

const AuthHeader = ({ authHeaderContent }: AuthHeaderProps) => {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold opacity-70">
        {authHeaderContent}
      </p>
      <div className="flex space-x-4 w-fit mx-auto">
        <Button content="Google" icon={<FcGoogle />} />
        <Button content="Apple" icon={<FaApple />} />
      </div>

      <div className="flex items-center space-x-4 mt-2">
        <span className="bg-slate-300 h-[2px] w-full block"></span>{" "}
        <span>Or</span>
        <span className="bg-slate-300 h-[2px] w-full block"></span>
      </div>
    </div>
  );
};

export default AuthHeader;
