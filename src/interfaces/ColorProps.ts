import { Color } from "../models/color";

export interface ColorProps{
    color: Color;
    onColorUpdated: (color: Color) => void;
  }