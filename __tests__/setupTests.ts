import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// You can add any global setup or configuration here

// Global utility function to render components with React Testing Library
// (global as any).renderWithRTL = (component: React.ReactElement) => {
//   return render(component);
// };

(global as any).renderWithRTL = function (component: React.ReactElement) {
  return render(component);
};

test("dummy test", () => {
  expect(true).toBe(true);
});
