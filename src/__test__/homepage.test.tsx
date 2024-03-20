import { render, screen } from "@testing-library/react";
import { Hero } from "../components/routes/home";
import { MemoryRouter } from "react-router-dom"; // Use this to handle the error thrown because react-router-dom

describe("Homepage", () => {
  // Test if hero section renders correctly
  it("renders Hero section", () => {
    // const setIsComingSoonMock = jest.fn(); // Mock function for setIsComingSoon prop

    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
  });
});
