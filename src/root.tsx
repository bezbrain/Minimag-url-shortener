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
import { ProtectedRoutes } from "./components/sharedLayouts";
import { ScrollTop } from "./components/general";
import { useState } from "react";
import { ComingSoon } from "./components/helpers";

const App = () => {
  const [isComingSoon, setIsComingSoon] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <ScrollTop /> {/* Render ScrollToTop component */}
      {isComingSoon && <ComingSoon setIsComingSoon={setIsComingSoon} />}
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="my-urls" element={<MyUrlsPage />}>
              <Route path="short-urls" element={<ShortUrl />} />
              <Route path="custom-urls" element={<CustomUrl />} />
            </Route>
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
