import { DefaultTheme } from 'styled-components';
import { Colors } from './colors';

const theme: DefaultTheme = {
  gutter: '20px',
  globalTransition: 'all 0.3s ease 0s',

  colors: {
    [Colors.TextPrimary]: '#fff',
    [Colors.TextSecondary]: '#fff',
    [Colors.TextSuccess]: '#fff',
    [Colors.TextWarning]: '#fff',
    [Colors.TextDanger]: '#fff',

    [Colors.BgPrimary]: '#007bff',
    [Colors.BgSecondary]: '#6c757d',
    [Colors.BgSuccess]: '#28a745',
    [Colors.BgWarning]: '#ffc107',
    [Colors.BgDanger]: '#dc3545',

    [Colors.BorderPrimary]: '#007bff',
    [Colors.BorderSecondary]: '#6c757d',
    [Colors.BorderSuccess]: '#28a745',
    [Colors.BorderWarning]: '#ffc107',
    [Colors.BorderDanger]: '#dc3545',
  },
};

export default theme;
