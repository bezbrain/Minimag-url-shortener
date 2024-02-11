import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button } from "../../general";
import { InputField } from "../../general/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center w-[400px]">
      <p className="mb-4 text-sm font-semibold opacity-70">Log in with:</p>
      <div className="flex space-x-4 w-fit mx-auto">
        <Button content="Google" icon={<FcGoogle />} />
        <Button content="Apple" icon={<FaApple />} />
      </div>

      <div className="flex items-center space-x-4 mt-2">
        <span className="bg-slate-300 h-[2px] w-full block"></span>{" "}
        <span>Or</span>
        <span className="bg-slate-300 h-[2px] w-full block"></span>
      </div>

      <div className="mt-8">
        <InputField
          inputType="text"
          inputPlaceholder="Email address or username"
        />
        <InputField
          inputType="password"
          inputPlaceholder="Password"
          inputStyle="mt-4"
        />
        <p className="text-right my-2 text-[#005ae2] text-sm">
          Forget your password?
        </p>

        <Button
          content="Log in"
          btnCon="w-full"
          btnCss="w-full rounded-2xl py-2"
        />

        <p className="my-2">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-[#005ae2]">
            Sign up
          </Link>
        </p>

        <p className="text-sm opacity-60">
          By signing in with an account, you agree to Minimag's{" "}
          <span className="font-semibold">
            Terms of Service, Privacy Policy
          </span>{" "}
          and <span className="font-semibold">Acceptable Use Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
