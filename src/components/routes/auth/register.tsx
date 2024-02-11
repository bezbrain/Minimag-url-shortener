import { Link } from "react-router-dom";
import { AuthHeader } from ".";
import { Button } from "../../general";
import { InputField } from "../../general/input";

const Register = () => {
  return (
    <div className="text-center w-[400px]">
      <AuthHeader authHeaderContent="Sign up with:" />

      <div className="mt-8">
        <InputField inputType="text" inputPlaceholder="Username" />
        <InputField
          inputType="email"
          inputPlaceholder="Email"
          inputStyle="mt-4"
        />
        <InputField
          inputType="password"
          inputPlaceholder="Password"
          inputStyle="mt-4"
        />
        <InputField
          inputType="password"
          inputPlaceholder="Retype Password"
          inputStyle="mt-4"
        />
        <p className="text-left my-2 text-[11px]">
          6 or more characters, one number, one uppercase & one lower case.
        </p>

        <Button
          content="Sign up with Email"
          btnCon="w-full"
          btnCss="w-full rounded-2xl py-2 my-6"
        />

        <p className="my-2">
          Already have an account?{" "}
          <Link to="/login" className="text-[#005ae2]">
            Log in
          </Link>
        </p>

        <p className="text-sm opacity-60">
          By signing up, you agree to Minimag's
          <span className="font-semibold">
            Terms of Service, Privacy Policy
          </span>{" "}
          and <span className="font-semibold">Acceptable Use Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Register;
