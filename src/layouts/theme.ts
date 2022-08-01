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
      main: '#FFF',
      variant: '#F4E6C1',
    },
    primary: {
      main: 'rgb(52, 158, 120)',
      variant: 'rgb(191, 123, 132)',
    },
    white: 'rgb(147, 79, 16)',
    light: 'rgb(222, 132, 70)',
  },
  transition: {
    main: 'all 400ms ease',
  },
  typography: {},
};

export default theme;
