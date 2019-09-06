import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}

html {
    box-sizing: border-box;
    line-height: 1.3;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

body {
    color: inherit;
    background-color: inherit;
    font-size: inherit;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}

/*
  This will hide the focus indicator if the element receives focus via the mouse,
  but it will still show up on keyboard focus.
*/
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}
`;

export default GlobalStyles;
