import { Typography } from '@mui/material';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = memo(() => {
  const { t } = useLanguage();
  return (
    <Typography variant="caption" sx={{ color: '#999999', mt: 0, fontSize: '0.75rem' }}>
      {t('copyright')}
    </Typography>
  );
});
