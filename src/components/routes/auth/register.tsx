import { useDispatch, useSelector } from "react-redux";
import { AuthFooter, AuthHeader } from ".";
import { Button } from "../../general";
import { InputField } from "../../general/input";
import { AppDispatch, RootState } from "../../../store";
import { ChangeEvent } from "react";
import { regInputs } from "../../../management/features/auth/registerSlice";

const Register = () => {
  const { regUser } = useSelector((store: RootState) => store.regStore);

  const { username, email, password, retypePassword } = regUser;

  const dispatch = useDispatch<AppDispatch>();

  const handleRegChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(regInputs({ name, value }));
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="text-center w-[400px]">
      <AuthHeader authHeaderContent="Sign up with:" />

      <form className="mt-8">
        <InputField
          inputType="text"
          inputPlaceholder="Username"
          inputName="username"
          inputValue={username}
          handleChange={handleRegChange}
        />
        <InputField
          inputType="email"
          inputPlaceholder="Email"
          inputStyle="mt-4"
          inputName="email"
          inputValue={email}
          handleChange={handleRegChange}
        />
        <InputField
          inputType="password"
          inputPlaceholder="Password"
          inputStyle="mt-4"
          inputName="password"
          inputValue={password}
          handleChange={handleRegChange}
        />
        <InputField
          inputType="password"
          inputPlaceholder="Retype Password"
          inputStyle="mt-4"
          inputName="retypePassword"
          inputValue={retypePassword}
          handleChange={handleRegChange}
        />
        <p className="text-left my-2 text-[11px]">
          6 or more characters, one number, one uppercase & one lower case.
        </p>

        <Button
          content="Sign up with Email"
          btnCon="w-full"
          btnCss="w-full rounded-2xl py-2 my-6"
          handleClick={handleRegSubmit}
        />

        <AuthFooter
          userStatus="Already have an account?"
          linkContent=" Log in"
          agreementOne="By signing up, you agree to Minimag's"
          agreementTwo=" Terms of Service, Privacy Policy"
          agreementThree=" Acceptable Use Policy"
          route="/login"
        />
      </form>
    </div>
  );
};

export default Register;
