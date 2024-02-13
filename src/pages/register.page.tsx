import { useDispatch, useSelector } from "react-redux";
import { Register } from "../components/routes/auth";
import { AppDispatch, RootState } from "../store";
import { toast } from "react-toastify";
import { register } from "../management/actions/auth";

const RegisterPage = () => {
  const { regUser } = useSelector((store: RootState) => store.regStore);

  const dispatch = useDispatch<AppDispatch>();

  const { username, email, password, retypePassword } = regUser;

  // SUBMIT FORM FUNCTION
  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !retypePassword) {
      toast.error("No field should be empty");
    } else {
      dispatch(register({ regUser }));
    }
  };

  return (
    <main className="pt-[15vh] px-4 flex justify-center items-center">
      <Register handleRegSubmit={handleRegSubmit} />
    </main>
  );
};

export default RegisterPage;
