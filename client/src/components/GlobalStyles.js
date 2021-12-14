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
    background: #faf9f0; 
    font-family: "Lora";
  }


  h1, h2, h3, h4, h5, h6, button {
    font-family: "Lora";
    transition: 0.3s ease-in-out;
  }

  p, textarea {
    font-family: "Lora";
    color: #3d405b;
    transition: 0.3s ease-in-out;
  }

  input {
    font-family: "Lora";
  }

  ul {
      list-style: none;
      padding: 0;
      color: #3d405b;
  }

  li {
    transition: 0.3s ease-in-out;
  }


  a {
    text-decoration: none;
  }

  button {
    transition: 0.3s ease-in-out;
  }

`;

export default GlobalStyles;
