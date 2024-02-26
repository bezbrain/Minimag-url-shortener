import { Outlet, useLocation } from "react-router-dom";
import { Footer, Nav } from "../components/sharedLayouts";
import { QrCode } from "../components/routes/home";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { clearFullShortLink } from "../management/features/link/linkSlice";
import { isCloseNav } from "../management/features/shared/sharedSlice";
import { analytics, event } from "../utils/firebase/firebaseConfig";

interface SharedLayoutsProps {
  setIsComingSoon: React.Dispatch<React.SetStateAction<boolean>>;
}

const SharedLayouts = ({ setIsComingSoon }: SharedLayoutsProps) => {
  const { isModal } = useSelector((store: RootState) => store.QrCodeStore);
  const { isOpen } = useSelector((store: RootState) => store.sharedStore);

  const pathname = useLocation().pathname;
  const dispatch = useDispatch<AppDispatch>();

  // CLOSE NAV BAR
  const handleCloseNavClick = () => {
    // Close nav bar only if nav bar is open
    if (isOpen) {
      dispatch(isCloseNav());
    }
  };

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
    <main onClick={handleCloseNavClick}>
      {/* QR Code component */}
      {isModal && <QrCode />}
      <section>
        <Nav />
        <Outlet />
        <Footer setIsComingSoon={setIsComingSoon} />
      </section>
    </main>
  );
};

export default SharedLayouts;
