import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "../src/pages";

describe("Homepage", () => {
  // Test if home page renders correctly
  it("renders home page", () => {
    const setIsComingSoonMock = jest.fn(); // Mock function for setIsComingSoon prop

    render(<HomePage setIsComingSoon={setIsComingSoonMock} />);

    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
