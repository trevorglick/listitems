import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App Component", () => {
  test("renders the main page", () => {
    const { getByText } = render(<App />);
    expect(getByText("Apple List Items")).toBeInTheDocument();
  });
  test("renders the loading products text before returning results", () => {
    const { getByText } = render(<App />);
    expect(getByText("Loading Products...")).toBeInTheDocument();
  });

  describe("search input", () => {
    test("is visible", () => {});
  });
});
