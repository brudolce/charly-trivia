import AppStyles from "../../App.styles";

export default class FormStyles extends AppStyles {
  public cardContainer(): Object {
    return {
      width: "280px",
      height: "500px",
      margin: "5px",
      ...this.border(),
      ...this.container("column", "space-between"),
    };
  }

  public cardForm(): Object {
    return {
      height: "100%",
      ...this.container("column", "space-around"),
    };
  }

  public formInfo(): Object {
    return {
      width: "240px",
      padding:"10px",
      ...this.text(1, this.black),
    };
  }

  public formInput(): Object {
    return {
      height: "30px",
      width: "240px",
      textIndent:"15px",
      ...this.border(),
      ...this.text(0.7, this.black, "start"),
    };
  }

  public formButtom(): Object {
    return {
      ...this.border(),
      ...this.text(0.8, this.black),
      height: "30px",
      width: "120px",
      backgroundColor: this.yellow,
      cursor: "pointer",
    };
  }

  static factory(): FormStyles {
    return new FormStyles();
  }
}
