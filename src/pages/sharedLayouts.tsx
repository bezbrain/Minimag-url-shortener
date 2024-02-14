import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components/sharedLayouts";

const SharedLayouts = () => {
  return (
    <section>
      <Nav />
      <Outlet />
      <Footer />
    </section>
  );
};

export default SharedLayouts;
