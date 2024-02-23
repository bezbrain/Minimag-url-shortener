import { useDispatch, useSelector } from "react-redux";
import { Register } from "../components/routes/auth";
import { AppDispatch, RootState } from "../store";
import { toast } from "react-toastify";
import { register } from "../management/actions/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface RegisterPageProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterPage = ({ setIsComingSoon }: RegisterPageProps) => {
  const { regUser } = useSelector((store: RootState) => store.regStore);

  const dispatch = useDispatch<AppDispatch>();
  const navigate: NavigateFunction = useNavigate();

  const { username, email, password, retypePassword } = regUser;

  // SUBMIT FORM FUNCTION
  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !retypePassword) {
      toast.error("No field should be empty");
    } else {
      dispatch(register({ regUser, navigate, toast }));
    }
  };

  return (
    <main className="pt-[15vh] min-h-[100vh] px-4 flex justify-center">
      <Register
        handleRegSubmit={handleRegSubmit}
        setIsComingSoon={setIsComingSoon}
      />
    </main>
  );
};

export default RegisterPage;
