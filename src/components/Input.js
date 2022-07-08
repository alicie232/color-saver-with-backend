import styled from "styled-components";

export default function Input({ labelText, type, onChange, onBlur, value }) {
  return (
    <Wrapper>
      <Label htmlFor={labelText}>{labelText}</Label>
      <InputStyled
        id={labelText}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const InputStyled = styled.input`
  width: 100%;
  /* max-width: 500px; */
  font-size: 1.6rem;
  padding: 0.4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  &:hover {
    outline: 1px dotted #444;
  }

  &:focus {
    outline: 1px dotted #444;
  }
`;

const Label = styled.label`
  font-size: 0.8em;
  color: #aaa;
  margin-bottom: 4px;
`;
