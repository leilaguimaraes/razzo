import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  :root {
    --azul-primario: #27438F;
    --branco: #fff;
    --preto: #000;
    --preto-secundario: #414141
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    overflow-x: hidden ;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--azul-primario);
    
  }
  /* Globals */
  
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;