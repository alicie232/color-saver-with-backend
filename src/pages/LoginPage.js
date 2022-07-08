import { useNavigate } from "react-router-dom";
import Button from "../components/Button.js";
import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input.js";

export default function LoginPage({ onLogin }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(user);
    navigate("/");
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          labelText={"Your name"}
          type={"text"}
          onChange={(event) => setUser(event.target.value.trim())}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
`;

const Form = styled.form`
  max-width: 400px;
  display: grid;
  gap: 20px;
`;
