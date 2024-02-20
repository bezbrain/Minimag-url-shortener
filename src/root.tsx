import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CustomUrl,
  HomePage,
  LoginPage,
  MyUrlsPage,
  NotFound,
  RegisterPage,
  SharedLayouts,
  ShortUrl,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="my-urls" element={<MyUrlsPage />}>
            <Route path="short-urls" element={<ShortUrl />} />
            <Route path="custom-urls" element={<CustomUrl />} />
          </Route>

          <Route path="/*" element={<NotFound />} />
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
        autoClose={7000}
      />
    </BrowserRouter>
  );
};

export default App;
