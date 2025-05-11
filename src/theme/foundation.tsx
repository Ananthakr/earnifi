import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8A6FDF',
  purpleMain: '#5E35B1',
  purpleDark: '#4527A0',
  
  greenLight: '#56DCBA',
  greenMain: '#0ECD9D',
  greenDark: '#0A906E',
  
  black: '#0B0B0B',
  white: '#F0F2F3',
  
  grayLight: '#E1E1E1',
  grayMain: '#9B9B9B',
  grayDark: '#4A4A4A',
  transparent: 'transparent',
  red: '#BF2C45',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purpleMain,
    cardSecondaryBackground: palette.greenMain, 
    
    primary: palette.purpleMain,
    secondary: palette.greenMain,
    
    textPrimary: palette.black,
    textSecondary: palette.grayDark,
    textOnPrimary: palette.white,
    textAltPrimary: palette.white,
    textAltSecondary: palette.grayLight,
    
    border: palette.grayLight,
    borderOnPrimary: palette.grayMain,
    transparent: palette.transparent,
    error: palette.red,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 32,
    full: 9999,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'textPrimary',
    },
    header: {
      fontSize: 36,
      fontWeight: 'bold',
      color: 'textPrimary',
    },
    subheader: {
      fontSize: 24,
      fontWeight: '600',
      color: 'textPrimary',
    },
    button: {
      fontSize: 18,
      fontWeight: '600',
      color: 'textPrimary',
    },
    body: {
      fontSize: 16,
      color: 'textPrimary',
    },
    caption: {
      fontSize: 14,
      color: 'textSecondary',
    },
  },
  inputVariants: {
    defaults: {
      padding: 'm',
      borderRadius: 'm',
      borderWidth: 1,
      borderColor: 'border',
      backgroundColor: 'mainBackground',
    },
    primary: {
      borderColor: 'primary',
    },
    error: {
      borderColor: 'secondary',
    },
  },
  buttonVariants: {
    defaults: {
      padding: 'm',
      borderRadius: 'm',
      backgroundColor: 'primary',
    },
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'primary',
    },
  },
  scrollViewVariants: {
    defaults: {
      backgroundColor: 'mainBackground',
    },
    card: {
      backgroundColor: 'cardPrimaryBackground',
      borderRadius: 'm',
      padding: 'm',
    },
  },
});

export type Theme = typeof theme;
export default theme; 