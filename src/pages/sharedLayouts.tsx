import { Outlet } from "react-router-dom";
import { Nav } from "../components/sharedLayouts";

const SharedLayouts = () => {
  return (
    <section>
      <Nav />
      <Outlet />
    </section>
  );
};

export default SharedLayouts;
