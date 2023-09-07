import * as React from "react";
import { ColorProps } from "../interfaces/ColorProps";

export const ColorBrowser: React.FC<ColorProps> = (props) => {
  const divStyle: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${props.color.red},${props.color.green}, ${props.color.blue})`,
  };

  return <div style={divStyle} />;
};