import styled from "styled-components";

export default styled.button`
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  background-color: var(--color-highlight);
  padding: 8px 15px 10px;

  &:active {
    background-color: #3e5383;
  }
`;
