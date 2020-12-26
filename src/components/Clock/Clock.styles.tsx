import AppStyles from "../../App.styles";

export default class ClockStyles extends AppStyles {
  public clockContainer(): Object {
    return {
      width: "140px",
      height:"65px",
      margin:"5px 0 10px 0",
      ...this.container("column"),
      ...this.text(2),
      ...this.border(),
    };
  }

  static factory(): ClockStyles {
    return new ClockStyles();
  }
}
