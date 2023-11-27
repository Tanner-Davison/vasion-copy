import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  p {
    font-family: 'Archivo';
    margin:0px;
    padding:0px;
    margin-bottom: 0px !important;
  }
  h2{
    font-family: 'Archivo';
    margin:0px;
    padding:0px;
    color:black;
  }
  *{
    max-width: 100vw;
  
}
  h3{
    font-family: 'Archivo';
    margin:0px;
    padding:0px;
  }
  /* Additional global styles */
`

export default GlobalStyles
