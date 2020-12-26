import React from "react";
import ScoreStyles from "./Score.styles";
import { useSelector } from "react-redux";
import { ApplicationStore } from "../../store";

const Score: React.FC = () => {
  //style
  const CSS = ScoreStyles.factory();
  //store
  const store = useSelector((reduxStore: ApplicationStore) => reduxStore);
  //methods
  const points = (): number => {
    let record = Object.keys(store.question.history).length;
    return record < 4 ? record - 1 : 2 ** (record - 2);
  };

  return (
    <div style={CSS.scoreContainer()}>
      <div>
        <div style={CSS.text(0.7, CSS.red)}>Points</div>
        <div style={CSS.text(1.1, CSS.red)}>
          {points() === -1 ? 0 : points()}
        </div>
      </div>
      <div>

      <div style={CSS.text(0.7, CSS.red)}>Round</div>
      <div style={CSS.text(1.1, CSS.red)}>{Object.keys(store.question.history).length}</div>
      </div>
    </div>
  );
};

export default Score;
