import { useDispatch, useSelector } from "react-redux";
import { AuthFooter, AuthHeader } from ".";
import { Button } from "../../general";
import { InputField } from "../../general/input";
import { AppDispatch, RootState } from "../../../store";
import { ChangeEvent } from "react";
import { regInputs } from "../../../management/features/auth/registerSlice";

interface RegisterProps {
  handleRegSubmit: (e: React.FormEvent) => void;
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ handleRegSubmit, setIsComingSoon }: RegisterProps) => {
  const { regUser, isLoading, isDisable } = useSelector(
    (store: RootState) => store.regStore
  );

  const { username, email, password, retypePassword } = regUser;

  const dispatch = useDispatch<AppDispatch>();

  // FUNCTION TO HANDLE REGISTRATION INPUT CHANGE
  const handleRegChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(regInputs({ name, value }));
  };

  return (
    <div className="text-center w-[400px]">
      <AuthHeader
        authHeaderContent="Sign up with:"
        setIsComingSoon={setIsComingSoon}
      />

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
        <p className="text-left my-2 text-[14px]">
          6 or more characters, atleast one number, one uppercase & one special
          character.
        </p>

        <Button
          content={isLoading ? "Signin up..." : "Sign up with Email"}
          btnCon="w-full"
          btnCss={`w-full rounded-2xl py-2 my-6 ${
            isDisable ? "cursor-not-allowed" : ""
          }`}
          isDisable={isDisable}
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
