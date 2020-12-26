import Home from "./Home";
import { render } from "@testing-library/react";

describe("App", () => {
  const home = render(<Home />);

  it("renders correctly", () => {
    expect(home).toMatchSnapshot();
  });
});
