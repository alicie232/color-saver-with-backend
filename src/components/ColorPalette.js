import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { ColorBox } from "./ColorBox";
import { ColorForm } from "./ColorForm";
import Input from "./Input.js";

export const ColorPalette = ({ palette, onChange }) => {
  const [name, setName] = useState();
  const [nameDirty, setNameDirty] = useState(false);

  useEffect(() => {
    setName(palette.name);
  }, [palette]);

  const handleAddColor = (code) => {
    onChange({
      ...palette,
      colors: [{ _id: nanoid(), code }, ...palette.colors],
    });
  };

  const handleDeleteColor = (id) => {
    onChange({
      ...palette,
      colors: palette.colors.filter((color) => color._id !== id),
    });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameDirty(true);
  };

  const handleNameBlur = (event) => {
    if (nameDirty) {
      onChange({
        ...palette,
        name: event.target.value,
        colors: [...palette.colors],
      });
      setNameDirty(false);
    }
  };

  const handleChangeColor = (id, code) => {
    onChange({
      ...palette,
      colors: palette.colors.map((color) => {
        return {
          ...color,
          code: color._id === id ? code : color.code,
        };
      }),
    });
  };
  return (
    <Container>
      <Wrapper>
        <Input
          labelText={"Palette Name"}
          type={"text"}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          value={name}
        />
      </Wrapper>
      <Flex>
        <ColorForm onSubmit={handleAddColor} />
        {palette.colors.map((color) => {
          return (
            <ColorBox
              color={color.code}
              key={color._id}
              onDelete={() => {
                handleDeleteColor(color._id);
              }}
              onChange={(code) => {
                handleChangeColor(color._id, code);
              }}
            />
          );
        })}
      </Flex>
      <Divider />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 860px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

const Divider = styled.hr`
  width: 100%;
  border-color: white;
`;
