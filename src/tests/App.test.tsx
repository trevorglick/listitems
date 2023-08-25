import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App Component", () => {
  test("renders the main page", () => {
    render(<App />);
    screen.debug();
  });
});
