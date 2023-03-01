import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        padding: 2em 3em;
        font-family: 'DM Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: ${(props) => props.theme.gray};
    }
`