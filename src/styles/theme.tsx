import { DefaultTheme } from 'styled-components';
import { Colors } from './colors';

const theme: DefaultTheme = {
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

    [Colors.Border]: 'rgba(0, 0, 0, 0.125)',
  },

  cornerRadius: '0.25rem',
  globalTransition: 'all 0.3s ease 0s',
  gutter: '20px',
};

export default theme;
