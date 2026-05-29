import { Box } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CoinFlip } from './pages/CoinFlip';
import { DiceRoller } from './pages/DiceRoller';

function AppContent() {
  const { theme } = useTheme();

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.background.default,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  boxSizing: 'border-box',
                  flex: 1
                }}>
                  <Home />
                </Box>
                <Box sx={{ padding: { xs: '0.75rem', md: '1rem' }, textAlign: 'center', width: '100%', boxSizing: 'border-box', backgroundColor: theme.palette.background.paper, borderTop: `1px solid ${theme.palette.divider}` }}>
                  <Footer />
                </Box>
              </>
            }
          />
          <Route
            path="/toss-coin"
            element={
              <>
                <Navbar />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: { xs: '2rem 1.5rem', sm: '2.5rem 2rem', md: '3rem 2.5rem' },
                  width: '100%',
                  boxSizing: 'border-box',
                  flex: 1
                }}>
                  <CoinFlip />
                </Box>
                <Box sx={{ padding: { xs: '0.75rem', md: '1rem' }, textAlign: 'center', width: '100%', boxSizing: 'border-box', backgroundColor: theme.palette.background.paper, borderTop: `1px solid ${theme.palette.divider}` }}>
                  <Footer />
                </Box>
              </>
            }
          />
          <Route
            path="/dice-roller"
            element={
              <>
                <Navbar />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: { xs: '2rem 1.5rem', sm: '2.5rem 2rem', md: '3rem 2.5rem' },
                  width: '100%',
                  boxSizing: 'border-box',
                  flex: 1
                }}>
                  <DiceRoller />
                </Box>
                <Box sx={{ padding: { xs: '0.75rem', md: '1rem' }, textAlign: 'center', width: '100%', boxSizing: 'border-box', backgroundColor: theme.palette.background.paper, borderTop: `1px solid ${theme.palette.divider}` }}>
                  <Footer />
                </Box>
              </>
            }
          />
        </Routes>
      </Router>
    </Box>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <AppContent />
    </MuiThemeProvider>
  );
}

export default App;
