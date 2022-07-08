import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --color-primary: white;
  --color-highlight: #698cdd;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #22222a;
  color: #ffffff;
  padding: 0 10px 25px;
}

`;
