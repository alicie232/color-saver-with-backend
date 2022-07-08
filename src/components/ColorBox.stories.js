import { action } from "@storybook/addon-actions";
import { ColorBox } from "./ColorBox.js";

export default {
  title: "ColorBox",
  component: ColorBox,
};

export const Default = (args) => <ColorBox {...args} />;

Default.args = {
  color: "#2f87ff",
  onDelete: action("deleted"),
};
