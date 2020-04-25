import { createGlobalStyle } from 'styled-components'

import { colors } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto;
    background-color: ${ ({ bgGray }) => bgGray ? colors.pageBg : colors.white};
  }
`
