import GameOver from "./GameOver";
import store from "../../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

describe("GameOver view", () => {
  const gameOver = render(
    <Provider store={store}>
      <GameOver />
    </Provider>
  );

  it("renders correctly", () => {
    expect(gameOver).toMatchSnapshot();
  });
});