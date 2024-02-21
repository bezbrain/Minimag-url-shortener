import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components/sharedLayouts";
import { QrCode } from "../components/routes/home";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const SharedLayouts = () => {
  const { isModal } = useSelector((store: RootState) => store.QrCodeStore);

  return (
    <>
      {/* QR Code component */}
      {isModal && <QrCode />}
      <section>
        <Nav />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default SharedLayouts;
