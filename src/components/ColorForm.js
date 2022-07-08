import { useState } from "react";
import styled from "styled-components";

export const ColorForm = ({ onSubmit }) => {
  const [code, setCode] = useState("#000000");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(code);
  };
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <SrOnly htmlFor="color">Choose color</SrOnly>
      <input id="color" type="color" value={code} onChange={handleChange} />
      <SrOnly htmlFor="text">Shows color code</SrOnly>
      <input id="text" type="text" value={code} onChange={handleChange} />
      <button>Add Color</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 200px;
  height: 200px;
  gap: 10px;
  padding: 40px;
  border: 1px solid slategray;
  border-radius: 7px;
  background-color: rgb(255 255 255 / 0.1);

  & * {
    height: 100%;
    width: 100%;
    background-color: rgb(230 230 230 / 0.9);
    border: 1px solid slategray;
    border-radius: 4px;
    text-align: center;
  }
`;

const SrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
