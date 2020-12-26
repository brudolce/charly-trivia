import Game from "./Game";
import store from "../../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

describe("App", () => {
  const game = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );

  it("renders correctly", () => {
    expect(game).toMatchSnapshot();
  });
});