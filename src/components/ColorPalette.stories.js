import { ColorPalette } from "./ColorPalette.js";
import { action } from "@storybook/addon-actions";

const examplePalette = {
  id: "kfhjtzrie8465thb",
  name: "New Palette",
  colors: [
    { id: "9475jfhrgcb", code: "#f866ff" },
    { id: "058rujfhrct", code: "#5957ff" },
    { id: "mbngjfh173659", code: "#ff665a" },
  ],
};

export default {
  title: "ColorPalette",
  component: ColorPalette,
};

export const Default = (args) => (
  <ColorPalette palette={examplePalette} {...args} />
);

Default.args = {
  onDelete: action("deleted"),
  onChange: action("changed"),
};
