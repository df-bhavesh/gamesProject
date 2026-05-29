import { createTheme } from '@mui/material/styles';
import { COLORS } from './theme';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
      dark: COLORS.PRIMARY_DARK
    },
    secondary: {
      main: COLORS.SECONDARY,
      dark: COLORS.SECONDARY_DARK
    },
    background: {
      default: '#ffffff',
      paper: COLORS.BG_WHITE
    },
    text: {
      primary: COLORS.TEXT_DARK,
      secondary: COLORS.TEXT_LIGHT
    },
    divider: COLORS.BORDER_LIGHT
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h3: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6b9d',
      dark: '#ff4d7f'
    },
    secondary: {
      main: '#8b9ef7',
      dark: '#6f7de6'
    },
    background: {
      default: '#1a1a2e',
      paper: '#16213e'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0'
    },
    divider: '#404040'
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h3: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600
        }
      }
    }
  }
});
