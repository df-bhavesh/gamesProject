import { Box, Typography, Link } from '@mui/material';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Footer = memo(({ text = 'copyright', links = [], align = 'center' }) => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? '#888888' : '#999999';

  return (
    <Box sx={{ textAlign: align, display: 'flex', flexDirection: 'column', gap: 1, alignItems: align === 'center' ? 'center' : 'flex-start' }}>
      <Typography variant="caption" sx={{ color: textColor, mt: 0, fontSize: '0.75rem' }}>
        {t(text)}
      </Typography>

      {links.length > 0 && (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target={link.target || '_blank'}
              rel="noopener noreferrer"
              sx={{
                fontSize: '0.7rem',
                color: textColor,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline', color: isDarkMode ? '#aaaaaa' : '#666666' }
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
});
