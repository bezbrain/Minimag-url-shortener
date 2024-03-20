import "intersection-observer"; // Import the polyfill for react-intersection-observer
import { render, screen } from "@testing-library/react";
import {
  Faqs,
  Hero,
  Price,
  TrimUrl,
  WhyMinimag,
} from "../components/routes/home";
import { MemoryRouter } from "react-router-dom"; // Use this to handle the error thrown because react-router-dom
import { Provider } from "react-redux";
import { store } from "../store";
import { Footer } from "../components/sharedLayouts";

describe("Homepage", () => {
  // Test if hero section renders correctly
  it("renders Hero section", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
  });

  // Test to check if why-choose-minimag section renders
  it("renders Why-choose section", () => {
    render(<WhyMinimag />);

    const whyChooseSection = screen.getByTestId("why-choose");
    expect(whyChooseSection).toBeInTheDocument();
  });

  // Test to check if pricing section renders
  it("renders pricing section", () => {
    const setIsComingSoonMock = vi.fn(); // Mock function for setIsComingSoon prop

    render(<Price setIsComingSoon={setIsComingSoonMock} />);

    const pricingSection = screen.getByTestId("price-section");
    expect(pricingSection).toBeInTheDocument();
  });

  // Test to check if trimUrl section renders
  it("renders trimUrl section", () => {
    render(
      <Provider store={store}>
        <TrimUrl />
      </Provider>
    );

    const trimUrlSection = screen.getByTestId("trim-url-section");
    expect(trimUrlSection).toBeInTheDocument();
  });

  // Test to check if faq section renders
  it("renders Faq section", () => {
    render(
      <Provider store={store}>
        <Faqs />
      </Provider>
    );

    const faqSection = screen.getByTestId("faq-section");
    expect(faqSection).toBeInTheDocument();
  });

  // Test to check if footer section renders
  it("renders Footer section", () => {
    const setIsComingSoonMock = vi.fn(); // Mock function for setIsComingSoon prop

    render(
      <MemoryRouter>
        <Footer setIsComingSoon={setIsComingSoonMock} />
      </MemoryRouter>
    );

    const footerSection = screen.getByTestId("footer-section");
    expect(footerSection).toBeInTheDocument();
  });
});
