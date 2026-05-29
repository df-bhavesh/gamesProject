import { Box, Button } from '@mui/material';
import { Header } from '../components/Header';
import { Statistics } from '../components/Statistics';
import { CoinDisplay } from '../components/CoinDisplay';
import { Footer } from '../components/Footer';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const CoinFlip = () => {
  const { heads, tails, isFlipping, result, flip } = useGameStore();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const flipButtonSx = {
    background: isDarkMode ? '#ff6b9d' : '#e84c89',
    color: 'white',
    padding: '14px 50px',
    fontSize: '1.05rem',
    fontWeight: '600',
    textTransform: 'none',
    borderRadius: '6px',
    minWidth: '200px',
    transition: 'all 0.2s',
    '&:hover:not(:disabled)': {
      background: isDarkMode ? '#ff4d7f' : '#d63a75',
      transform: 'scale(1.02)'
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.98)'
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: { xs: '0.25rem 1.5rem 0.5rem', sm: '0.25rem 2rem 0.5rem', md: '0.25rem 2.5rem 0.5rem' },
      width: '100%',
      boxSizing: 'border-box',
      flex: 1
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 0.75, sm: 1, md: 1.25 } }}>
        <Header />
        <Statistics heads={heads} tails={tails} />
        <CoinDisplay result={result} isFlipping={isFlipping} />
        <Button onClick={flip} disabled={isFlipping} variant="contained" sx={{
          ...flipButtonSx,
          opacity: isFlipping ? 0.6 : 1,
          minWidth: { xs: '140px', sm: '160px', md: '180px' },
          padding: { xs: '10px 25px', sm: '11px 35px', md: '12px 45px' },
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
        }}>
          {isFlipping ? t('flipping') : t('flipCoin')}
        </Button>
      </Box>
    </Box>
  );
};
