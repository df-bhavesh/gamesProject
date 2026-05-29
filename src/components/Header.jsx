import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Header = memo(() => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <Box sx={{ textAlign: 'center', mb: 0.25, width: '100%', px: { xs: 1, md: 0 } }}>
      <Typography variant="h3" sx={{ fontWeight: '700', color: isDarkMode ? '#ffffff' : '#000', mb: 0.1, fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' } }}>
        {t('headsOrTails')}
      </Typography>
      <Typography sx={{ color: isDarkMode ? '#b0b0b0' : '#666', fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}>
        {t('flipVirtual')}
      </Typography>
    </Box>
  );
});
