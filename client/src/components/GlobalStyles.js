import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-cornflower-blue: #7F87F0;
    --color-palatine-purple: #6D326D;
    --color-yellow: #EDB230;
    --color-light-grey: #E5EBEA;
    --color-viridian-green: #558B6E;
    --font-heading: "Raleway"
    --font-body: "Raleway"
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
    background: rgb(237, 238, 255); 
    font-family: "Raleway";
  }


  h1, h2, h3, h4, h5, h6, button {
    font-family: "Raleway"
  }

  p, textarea {
    font-family: "Raleway";
    color: #151627;
  }

  input {
    font-family: "Raleway";
  }

  ul {
      list-style: none;
      padding: 0;
      color: #151627;
  }


  a {
    text-decoration: none;
  }

  button {
    transition: 0.3s ease-in-out;
  }

`;

export default GlobalStyles;
