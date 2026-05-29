import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../config/theme';

export const CoinDisplay = memo(({ result, isFlipping }) => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const getCoinText = () => {
    if (isFlipping) return '...';
    if (result === 'heads') return t('heads').toUpperCase();
    if (result === 'tails') return t('tails').toUpperCase();
    return t('flipCoin').split(' ')[0].toUpperCase();
  };

  const getCoinBackground = () => {
    if (isDarkMode) {
      const darkBgMap = { heads: '#ff6b9d', tails: '#555555' };
      return darkBgMap[result] || '#404040';
    }
    const bgMap = { heads: COLORS.COIN_HEADS, tails: COLORS.COIN_TAILS };
    return bgMap[result] || COLORS.COIN_DEFAULT;
  };

  return (
    <Box
      sx={{
        width: { xs: '110px', sm: '130px', md: '160px' },
        height: { xs: '110px', sm: '130px', md: '160px' },
        minWidth: { xs: '110px', sm: '130px', md: '160px' },
        minHeight: { xs: '110px', sm: '130px', md: '160px' },
        maxWidth: { xs: '110px', sm: '130px', md: '160px' },
        maxHeight: { xs: '110px', sm: '130px', md: '160px' },
        background: getCoinBackground(),
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px dashed rgba(200,200,200,0.5)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        mb: 1,
        perspective: '1000px',
        aspectRatio: '1',
        animation: isFlipping ? 'flipCoin 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
        transformStyle: 'preserve-3d',
        '@keyframes flipCoin': {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'rotateY(900deg) rotateX(180deg)' },
          '50%': { transform: 'rotateY(1800deg) rotateX(360deg)' },
          '75%': { transform: 'rotateY(2700deg) rotateX(540deg)' },
          '100%': { transform: 'rotateY(3600deg) rotateX(720deg)' }
        }
      }}
    >
      <Typography sx={{ color: 'white', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, fontWeight: 'bold' }}>
        {getCoinText()}
      </Typography>
    </Box>
  );
});
