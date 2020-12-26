import AppStyles from "../../App.styles";

export default class HomeStyles extends AppStyles {
  public end(): Object {
    return {
      ...this.text(2, this.red),
      ...this.container(),
      height: "100px",
    };
  }

  public answers(): Object {
    return {
      ...this.text(1, this.black),
      ...this.container("column"),
      height: "150px",
    };
  }

  public restartButton(): Object {
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
      height: "100%",
      width: "280px",
      ...this.container(),
    };
  }

  static factory(): HomeStyles {
    return new HomeStyles();
  }
}
