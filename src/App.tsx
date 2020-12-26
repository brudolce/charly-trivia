import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Game from "./views/Game/Game";
import Home from "./views/Home/Home";
import GameOver from "./views/GameOver/GameOver";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/gameover" component={GameOver} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
