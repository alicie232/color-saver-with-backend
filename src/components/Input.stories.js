import Input from "./Input.js";

export default {
  title: "Input",
  component: Input,
};

export const Default = () => (
  <Input labelText={"Palette name"} type={"text"} value={"New Palette"} />
);
