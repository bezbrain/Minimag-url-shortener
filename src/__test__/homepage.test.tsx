import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { describe } from "vitest";
import { Hero } from "../components/routes/home";

describe("Homepage", () => {
  // Test if hero section renders correctly
  it("renders Hero section", () => {
    // const setIsComingSoonMock = jest.fn(); // Mock function for setIsComingSoon prop

    render(<Hero />);

    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
  });
});
