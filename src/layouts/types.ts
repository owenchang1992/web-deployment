/* eslint-disable no-unused-vars */
export interface ThemeInterface {
  breakpoints: {
    value: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    up: (
      key: keyof ThemeInterface['breakpoints']['value']
    ) => (style: string) => string;
    between: (
      key1: keyof ThemeInterface['breakpoints']['value'],
      key2: keyof ThemeInterface['breakpoints']['value']
    ) => (style: string) => string;
    down: (
      key: keyof ThemeInterface['breakpoints']['value']
    ) => (style: string) => string;
  };
  palette: {
    bg: {
      main: string;
      variant: string;
    };
    primary: {
      main: string;
      variant: string;
    };
    white: string;
    light: string;
  };
  transition: {
    main: string;
  };
  typography: any;
}
