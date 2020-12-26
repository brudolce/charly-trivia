import React from "react";
import HomeStyles from "./Home.styles";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  //style
  const CSS = HomeStyles.factory();
  //router
  const history = useHistory();
  const changePage = (): void => history.push("/game");

  return (
    <div style={CSS.page()}>
      <div style={CSS.title()}>CHARLY TRIVIA GAME</div>

      <div onClick={changePage} style={CSS.startButton()}>
        START GAME
      </div>

      <div style={CSS.loadingContainer()}>
        <img
          src="https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif"
          alt="rollingcat"
          height="200px"
        />
      </div>
    </div>
  );
};

export default Home;
