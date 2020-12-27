import Loading from "./Loading";
import { render } from "@testing-library/react";

describe("Loading component", () => {
  const loading = render(<Loading />);

  it("renders correctly", () => {
    expect(loading).toMatchSnapshot();
  });
});
