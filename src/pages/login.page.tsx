import { useDispatch, useSelector } from "react-redux";
import { Login } from "../components/routes/auth";
import { AppDispatch, RootState } from "../store";
import { toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { login } from "../management/actions/auth";

const LoginPage = () => {
  const { loginUser } = useSelector((store: RootState) => store.loginStore);

  const { email, password } = loginUser;

  const dispatch = useDispatch<AppDispatch>();
  const navigate: NavigateFunction = useNavigate();

  // SUBMIT FORM FUNCTION
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("No field should be empty");
    } else {
      dispatch(login({ loginUser, navigate }));
    }
  };

  return (
    <main className="pt-[15vh] min-h-[100vh] px-4 flex justify-center">
      <Login handleLoginSubmit={handleLoginSubmit} />
    </main>
  );
};

export default LoginPage;
