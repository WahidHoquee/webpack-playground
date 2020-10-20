import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { red, makeColorStyle } from "./button-styles";

console.log(
  nav(),
  red,
  top,
  bottom,
  makeButton("My first button!"),
  makeColorStyle("cyan")
);
 