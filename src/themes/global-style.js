import { createGlobalStyle } from "styled-components"
// import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${({ theme }) => theme.fonts.main};
        height: 100%;
        background-color: ${({ theme }) => theme.colors.light1}
    }
`
