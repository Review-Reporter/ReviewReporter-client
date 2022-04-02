import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    padding: 0;
    background: #242424;
  }

  body {
    width: 1280px;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 2rem;
    margin: 0 auto;
    color: ${ props => props.theme.text_color };
    font-size: 1.125rem;

    @media screen and (max-width: 1023px) {
      width: 100%;
    }

    @media screen and (max-width: 599px) {
      /* add warning text */
    }
  }

  @font-face {
    font-family: 'LeferiPoint-BlackObliqueA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'KoPubDotumMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/KoPubDotumMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

