import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    width: 4px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #AD8E00;
    border-radius: 8px;
  }

  body::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

export default GlobalStyles;
