import '@emotion/react';
import {iTheme} from '@theme/theme';

declare module '@emotion/react' {
  export interface Theme extends iTheme {}
}
