import { createGlobalStyle } from "styled-components";

import { colors } from "./constants";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100vh !important;
    font-size: 15px;
  }

  body {
    overflow: hidden;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    font-family: "Roboto", Helvetica, sans-serif;
  }

  button, link{
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus{
  -webkit-text-fill-color: ${colors.primary};
  -webkit-box-shadow: 0 0 0px 1000px ${colors.white} inset;
  transition: background-color 0.5s ease-in-out;
  }
  `;
