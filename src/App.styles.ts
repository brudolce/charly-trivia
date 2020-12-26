export default class AppStyles {
  public white: string = "white";
  public black: string = "#868686";
  public red: string = "#e08f62";
  public yellow: string = "#f0ede5";
  public font: string = "Charter,Georgia,Times,Serif";

  public text(
    size: number = 1,
    colour: string = this.black,
    align: string = "center",
    thick: string = "normal"
  ): Object {
    return {
      fontFamily: this.font,
      fontSize: `${size * 1.1875}rem`,
      textAlign: align,
      color: colour,
      fontWeight: thick,
      lineHeight: 1.6,
    };
  }

  public container(
    direction: string = "row",
    justify = "center",
    wrap = "wrap"
  ): Object {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: justify,
      flexWrap: wrap,
      flexDirection: direction,
    };
  }

  public page(): Object {
    return {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: this.white,
      ...this.container("column")
    };
  }

  public border(): Object {
    return {
      border: `solid ${this.black} 1px`,
      borderRadius: "25px",
    };
  }

  static factory(bf = false): AppStyles {
    return new AppStyles();
  }
}
