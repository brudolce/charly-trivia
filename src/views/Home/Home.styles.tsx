import AppStyles from "../../App.styles";

export default class HomeStyles extends AppStyles {
  public title(): Object {
    return {
      ...this.text(2),
      ...this.container(),
      height: "200px",
    };
  }

  public startButton(): Object {
    return {
      ...this.border(),
      ...this.container(),
      ...this.text(1),
      backgroundColor: this.yellow,
      width: "300px",
      height: "60px",
      cursor: "pointer",
    };
  }

  public loadingContainer(): Object {
    return {
      margin:"20px",
      height: "100%",
      width: "280px",
      ...this.container(),
    };
  }

  static factory(): HomeStyles {
    return new HomeStyles();
  }
}
