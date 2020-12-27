import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Game from "./views/Game/Game";
import Home from "./views/Home/Home";
import GameOver from "./views/GameOver/GameOver";
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/gameover" component={GameOver} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
