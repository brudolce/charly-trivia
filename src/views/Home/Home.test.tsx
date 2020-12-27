import Home from "./Home";
import { render } from "@testing-library/react";

describe("Home view", () => {
  const home = render(<Home />);

  it("renders correctly", () => {
    expect(home).toMatchSnapshot();
  });
});
