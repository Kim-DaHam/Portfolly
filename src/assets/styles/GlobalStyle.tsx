import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;