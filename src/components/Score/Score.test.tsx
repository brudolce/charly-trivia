import Score from "./Score";
import { render } from "@testing-library/react";
import store from "../../store";
import { Provider } from "react-redux";

describe("Score component", () => {
  const score = render(
    <Provider store={store}>
      <Score />
    </Provider>
  );

  it("renders correctly", () => {
    expect(score).toMatchSnapshot();
  });
});
