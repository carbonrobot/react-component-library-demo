import 'styled-components';
import { Colors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    gutter: string;
    globalTransition: string;

    colors: Record<Colors, string>;
  }
}
