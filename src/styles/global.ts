import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
      --background: #f0f2f5;
      --shape: #ffffff;
      --red: #e52e4d;
      --green: #33cc95;
      --blue: #5429cc;
      --blue-light: #6933ff;
      --text-title: #363f5f;
      --text-body: #969cb3;
    }

    html {
      @media(max-width:1080px) {
        font-size: 93.75%;
      }

      @media(max-width:720px) {
        font-size: 87.5%;
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;
