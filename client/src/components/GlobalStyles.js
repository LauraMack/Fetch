import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-cornflower-blue: #7F87F0;
    --color-palatine-purple: #6D326D;
    --color-yellow: #EDB230;
    --color-light-grey: #E5EBEA;
    --color-viridian-green: #558B6E;
    --font-heading: "Lora"
    --font-body: "Lora"
  }

  *,
  *:before,
  *:after {
      scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background: #f4f1de; 
    font-family: "Lora";
  }


  h1, h2, h3, h4, h5, h6, button {
    font-family: "Lora"
  }

  p, textarea {
    font-family: "Lora";
    color: #3d405b;
  }

  input {
    font-family: "Lora";
  }

  ul {
      list-style: none;
      padding: 0;
      color: #3d405b;
  }


  a {
    text-decoration: none;
  }

  button {
    transition: 0.3s ease-in-out;
  }

`;

export default GlobalStyles;
