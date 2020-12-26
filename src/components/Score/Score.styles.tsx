import AppStyles from "../../App.styles";

export default class ScoreStyles extends AppStyles {
  public scoreContainer(): Object {
    return {
      width: "280px",
      height:"65px",
      margin:"5px 0 10px 0",
      ...this.container("row", "space-around"),

      ...this.border(),
    };
  }

  static factory(): ScoreStyles {
    return new ScoreStyles();
  }
}
