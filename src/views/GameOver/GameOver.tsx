import React from "react";
import GameOverStyles from "./GameOver.styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationStore } from "../../store";

const GameOver: React.FC = () => {
  //styles
  const CSS = GameOverStyles.factory();
  //router
  const history = useHistory();
  const changePage = (): void => history.push("/game");
  //store
  const store = useSelector((reduxStore: ApplicationStore) => reduxStore);
  //methods
  const restart = (): void => {
    changePage();
  };

  return (
    <div style={CSS.page()}>
      <div style={CSS.end()}>
        {store.question.win ? "YOU WON!" : "GAME OVER"}
      </div>
      {!store.question.win &&(
          <div style={CSS.answers()}>
            <div>Your Answer: {store.question.answer}</div>
            <div>Expected Answer: {store.question.current.answer}</div>
          </div>
        )}

      <div onClick={restart} style={CSS.restartButton()}>
        RESTART
      </div>

      <div style={CSS.loadingContainer()}>
        <img
          src="https://media.giphy.com/media/Jo1yuVTAJbByObho6E/giphy.gif"
          alt="catgif"
          height="200px"
        />
      </div>
    </div>
  );
};

export default GameOver;
