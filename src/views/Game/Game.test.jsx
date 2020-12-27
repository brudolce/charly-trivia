import Game from "./Game";
import store from "../../store";
import { Provider } from "react-redux";
import { render, act, screen } from "@testing-library/react";
import { fetchQuestion } from "./fetchData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
jest.mock("./fetchData", () => ({ fetchQuestion: jest.fn() }));
fetchQuestion.mockImplementation(() =>
  Promise.resolve({
    id: 2,
    answer: "test answer",
    question: "test",
    category: { id: 0, title: "test category" },
  })
);

describe("Game view", () => {
  const game = render(
    <Provider store={store}>
      <Game />
    </Provider>
  );

  it("game fetch, render & click behaviour", async () => {
    const category = await game.findByText(/category/i);
    expect(category.innerHTML).toBe("Category: test category");

    const round = await game.findByText(/round/i);
    expect(round).toBeInTheDocument();

    await act(async () => {
      const answerField = game.getByRole("textbox", {
        name: "",
      });
      const checkButton = await game.findByText(/check/i);
      answerField.nodeValue = "test answer";
      checkButton.click();
    });

    expect(game).toMatchSnapshot();
  });
});
