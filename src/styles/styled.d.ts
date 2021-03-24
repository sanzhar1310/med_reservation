import 'styled-components';
import colors from './_colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontPrimary: string;
    transition: string;

    colors: typeof colors;
  }
}
