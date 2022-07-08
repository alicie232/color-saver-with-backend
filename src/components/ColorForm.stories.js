import { action } from "@storybook/addon-actions";
import { ColorForm } from "./ColorForm.js";

export default {
  title: "ColorForm",
  component: ColorForm,
};

export const Default = (args) => <ColorForm {...args} />;

Default.args = {
  onSubmit: action("submitted"),
};
