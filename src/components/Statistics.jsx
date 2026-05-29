import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Statistics = memo(({ heads, tails }) => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <Box sx={{ textAlign: 'center', mb: 0.5 }}>
      <Typography sx={{ color: isDarkMode ? '#b0b0b0' : '#333', fontSize: '0.8rem', fontWeight: '500' }}>
        {t('heads')}: <strong>{heads}</strong> &nbsp;&nbsp;&nbsp; {t('tails')}: <strong>{tails}</strong>
      </Typography>
    </Box>
  );
});
