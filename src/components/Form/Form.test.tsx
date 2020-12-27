import Form from "./Form";
import { render } from "@testing-library/react";

describe("Form component", () => {
  const form = render(<Form question="test" />);

  it("renders correctly", () => {
    expect(form).toMatchSnapshot();
  });
});
