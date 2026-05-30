import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme, blueTheme, purpleTheme, greenTheme, orangeTheme } from '../config/muiTheme';

const ThemeContext = createContext();

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
  blue: blueTheme,
  purple: purpleTheme,
  green: greenTheme,
  orange: orangeTheme
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const theme = THEMES[currentTheme];
  const isDarkMode = currentTheme === 'dark';

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (themeName) => {
    if (THEMES[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, currentTheme, setTheme, availableThemes: Object.keys(THEMES) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
