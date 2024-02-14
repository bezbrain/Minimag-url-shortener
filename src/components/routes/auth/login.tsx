import { Button } from "../../general";
import { InputField } from "../../general/input";
import { AuthFooter, AuthHeader } from ".";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { ChangeEvent } from "react";
import { loginInputs } from "../../../management/features/auth/loginSlice";

interface LoginProps {
  handleLoginSubmit: (e: React.FormEvent) => void;
}

const Login = ({ handleLoginSubmit }: LoginProps) => {
  const { loginUser, isLoading, isDisable } = useSelector(
    (store: RootState) => store.loginStore
  );

  const { email, password } = loginUser;

  const dispatch = useDispatch<AppDispatch>();

  // FUNCTION TO HANDLE LOGIN INPUT CHANGE
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(loginInputs({ name, value }));
  };

  return (
    <div className="text-center w-[400px]">
      <AuthHeader authHeaderContent="Log in with:" />

      <form className="mt-8">
        <InputField
          inputType="text"
          inputPlaceholder="Email address or username"
          inputName="email"
          inputValue={email}
          handleChange={handleLoginChange}
        />
        <InputField
          inputType="password"
          inputPlaceholder="Password"
          inputStyle="mt-4"
          inputName="password"
          inputValue={password}
          handleChange={handleLoginChange}
        />
        <p className="text-right my-2 text-[#005ae2] text-sm">
          Forget your password?
        </p>

        <Button
          content={isLoading ? "Logging in..." : "Log in"}
          btnCon="w-full"
          btnCss={`w-full rounded-2xl py-2 ${
            isDisable ? "cursor-not-allowed" : ""
          }`}
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
