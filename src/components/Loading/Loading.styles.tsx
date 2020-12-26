import AppStyles from "../../App.styles";

export default class LoadingStyles extends AppStyles {
  public loadingContainer(): Object {
    return {
      height:"100%",
      width: "280px",
      ...this.container(),
    };
  }

  static factory(): LoadingStyles {
    return new LoadingStyles();
  }
}
