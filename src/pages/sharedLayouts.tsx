import { Outlet, useLocation } from "react-router-dom";
import { Footer, Nav } from "../components/sharedLayouts";
import { QrCode } from "../components/routes/home";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { clearFullShortLink } from "../management/features/link/linkSlice";

const SharedLayouts = () => {
  const { isModal } = useSelector((store: RootState) => store.QrCodeStore);

  const pathname = useLocation().pathname;
  const dispatch = useDispatch<AppDispatch>();

  // CLEAR THE FULLSHORTURL FIELD WHEN NOT ON EITHER SHORT OR CUSTOM LINK PAGE
  useEffect(() => {
    if (
      pathname !== "/my-urls/short-urls" &&
      pathname !== "/my-urls/custom-urls"
    ) {
      dispatch(clearFullShortLink());
    }
  }, [pathname]);

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
