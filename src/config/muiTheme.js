import { createTheme } from '@mui/material/styles';
import { COLORS } from './theme';

// Light Theme (Default)
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

// Dark Theme
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

// Blue Theme
export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      dark: '#1565c0'
    },
    secondary: {
      main: '#00bcd4',
      dark: '#0097a7'
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff'
    },
    text: {
      primary: '#1a237e',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h3: { fontWeight: 700 },
    h6: { fontWeight: 700 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 }
      }
    }
  }
});

// Purple Theme
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
      dark: '#7b1fa2'
    },
    secondary: {
      main: '#ff4081',
      dark: '#f50057'
    },
    background: {
      default: '#f3e5f5',
      paper: '#ffffff'
    },
    text: {
      primary: '#4a148c',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h3: { fontWeight: 700 },
    h6: { fontWeight: 700 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 }
      }
    }
  }
});

// Green Theme
export const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      dark: '#388e3c'
    },
    secondary: {
      main: '#8bc34a',
      dark: '#689f38'
    },
    background: {
      default: '#f1f8e9',
      paper: '#ffffff'
    },
    text: {
      primary: '#1b5e20',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h3: { fontWeight: 700 },
    h6: { fontWeight: 700 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 }
      }
    }
  }
});

// Orange Theme
export const orangeTheme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
      dark: '#f57c00'
    },
    secondary: {
      main: '#ffb74d',
      dark: '#ffa726'
    },
    background: {
      default: '#fff3e0',
      paper: '#ffffff'
    },
    text: {
      primary: '#e65100',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    h3: { fontWeight: 700 },
    h6: { fontWeight: 700 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 }
      }
    }
  }
});
