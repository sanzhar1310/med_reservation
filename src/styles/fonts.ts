import { css } from 'styled-components';

const fontFaces = css`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2'),
      url('/fonts/Montserrat/Montserrat-Regular.woff') format('woff'),
      url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Light.woff2') format('woff2'),
      url('/fonts/Montserrat/Montserrat-Light.woff') format('woff'),
      url('/fonts/Montserrat/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-SemiBold.woff2') format('woff2'),
      url('/fonts/Montserrat/Montserrat-SemiBold.woff') format('woff'),
      url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
`;

export default fontFaces;
