import { useState, useEffect } from "react";
import styled from "styled-components";

const apiEndpoint = "https://www.thecolorapi.com/id";

export const ColorBox = ({ color, onDelete, onChange, readOnly = false }) => {
  const [colorName, setColorName] = useState("");
  const [colorInput, setColorInput] = useState(color);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const fetchColorName = async () => {
      try {
        const response = await fetch(`${apiEndpoint}?hex=${color.slice(1)}`);

        if (response.ok) {
          const data = await response.json();
          setColorName(data.name.value);
        } else {
          throw new Error(`Server returned ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (color) {
      fetchColorName();
    }
  }, [color]);

  const handleClick = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setMessage("Copied!");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch(() => {
        setMessage("Copy failed :-(");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
  };
  return (
    <Box background={color} onClick={handleClick}>
      <p>{colorName}</p>
      {readOnly === false && (
        <>
          <Input
            type="text"
            value={colorInput}
            onBlur={() => {
              onChange(colorInput);
            }}
            onChange={(event) => {
              setColorInput(event.target.value);
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
          <Button
            type="button"
            className="color-box__delete"
            onClick={(event) => {
              event.stopPropagation();
              onDelete();
            }}
          >
            X
          </Button>
        </>
      )}

      {message && <Message>{message}</Message>}
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  ${(props) =>
    props.background ? `background-color: ${props.background}` : null};
  width: 200px;
  height: 200px;
  padding: 40px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -6px 0px inset;
  cursor: copy;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: rgb(230 230 230 / 0.9);
  border: 1px solid slategray;
  border-radius: 4px;
  text-align: center;
`;

const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 24px;
  width: 24px;
  line-height: 24px;
  font-size: 10px;
  text-align: center;
  border-radius: 999px;
  padding: 0;
  border: 1px solid #aab;
  color: rgb(132, 132, 146);
  cursor: pointer;
  background-color: #ccd;
`;

const Message = styled.div`
  position: absolute;
  top: -5px;
  background-color: springgreen;
  color: rgb(0 0 0 / 0.7);
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;
