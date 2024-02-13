import { Button } from "../../general";
import { InputField } from "../../general/input";
import { AuthFooter, AuthHeader } from ".";

const Login = () => {
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="text-center w-[400px]">
      <AuthHeader authHeaderContent="Log in with:" />

      <form className="mt-8">
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
          handleClick={handleLoginSubmit}
        />

        <AuthFooter
          userStatus="Don't have an account?"
          linkContent=" Sign up"
          agreementOne="By signing in with an account, you agree to Minimag's"
          agreementTwo=" Terms of Service, Privacy Policy"
          agreementThree=" Acceptable Use Policy"
          route="/register"
        />
      </form>
    </div>
  );
};

export default Login;
