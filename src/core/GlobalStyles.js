import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *,::after,::before{
        box-sizing:inherit
    }

    body {
    background-color: ${({ theme }) => theme.color.VeryLightGray};
    font-family: 'Public', sans-serif;
    word-break: break-word;
    overflow-y: scroll;
    scroll-behavior:smooth;
}
`;
