import { ThemeInterface } from './types';

const theme: ThemeInterface = {
  breakpoints: {
    value: {
      xs: '0em',
      sm: '43em',
      md: '62em',
      lg: '82em',
      xl: '120em',
    },
    up(key: keyof typeof theme.breakpoints.value) {
      return (style: string) =>
        `@media screen and (min-width: ${theme.breakpoints.value[key]}) { ${style} }`;
    },
    between(
      key1: keyof typeof theme.breakpoints.value,
      key2: keyof typeof theme.breakpoints.value
    ) {
      return (style: string) =>
        `@media screen and (min-width: ${theme.breakpoints.value[key1]}) and (max-width: ${theme.breakpoints.value[key2]}) { ${style} }`;
    },
    down(key: keyof typeof theme.breakpoints.value) {
      return (style: string) =>
        `@media screen and (max-width: ${theme.breakpoints.value[key]}) { ${style} }`;
    },
  },
  palette: {
    bg: {
      main: '#1f1f38',
      variant: '#2c2c6c',
    },
    primary: {
      main: '#4db5ff',
      variant: 'rgba(77, 181, 255, 0.4)',
    },
    white: '#fff',
    light: 'rgba(255, 255, 255, 0.6)',
  },
  transition: {
    main: 'all 400ms ease',
  },
  typography: {},
};

export default theme;
