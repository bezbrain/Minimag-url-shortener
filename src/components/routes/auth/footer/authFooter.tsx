import { Link } from "react-router-dom";

interface AuthFooterProps {
  userStatus: string;
  linkContent: string;
  agreementOne: string;
  agreementTwo: string;
  agreementThree: string;
  route: string;
}

const AuthFooter = ({
  userStatus,
  linkContent,
  agreementOne,
  agreementTwo,
  agreementThree,
  route,
}: AuthFooterProps) => {
  return (
    <>
      <p className="my-2">
        {userStatus}
        <Link to={route} className="text-[#005ae2]">
          {linkContent}
        </Link>
      </p>

      <p className="text-sm opacity-60">
        {agreementOne}
        <span className="font-semibold">{agreementTwo}</span> and
        <span className="font-semibold">{agreementThree}</span>.
      </p>
    </>
  );
};

export default AuthFooter;
