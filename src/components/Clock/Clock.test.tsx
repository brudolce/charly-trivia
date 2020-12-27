import Clock from "./Clock";
import { render } from "@testing-library/react";
import store from "../../store";
import { Provider } from "react-redux";

describe("Clock component", () => {
  const clock = render(
    <Provider store={store}>
      <Clock />
    </Provider>
  );

  it("renders correctly", () => {
    expect(clock).toMatchSnapshot();
  });
});
