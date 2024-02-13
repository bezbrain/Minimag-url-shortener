import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, SharedLayouts } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        theme="dark"
        toastStyle={{
          color: "#fff",
          backgroundColor: "#005ae2",
          marginInline: "10px",
        }}
        progressStyle={{ backgroundColor: "red" }}
      />
    </BrowserRouter>
  );
};

export default App;
