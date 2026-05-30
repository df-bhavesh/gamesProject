import { Box, Typography, Button, IconButton, Select, MenuItem, Menu } from '@mui/material';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { GamesGrid } from '../components/GamesGrid';

const THEME_OPTIONS = [
  { code: 'light', label: 'Light', color: '#e84c89' },
  { code: 'dark', label: 'Dark', color: '#667eea' },
  { code: 'blue', label: 'Blue', color: '#1976d2' },
  { code: 'purple', label: 'Purple', color: '#9c27b0' },
  { code: 'green', label: 'Green', color: '#4caf50' },
  { code: 'orange', label: 'Orange', color: '#ff9800' }
];

const WATERMARKS = [
  { emoji: '🎲', top: '5%', right: null, left: '5%', bottom: null, size: '80px', opacity: 0.1 },
  { emoji: '🪙', top: '10%', right: '8%', left: null, bottom: null, size: '70px', opacity: 0.1 },
  { emoji: '🎯', top: null, right: null, left: '10%', bottom: '15%', size: '75px', opacity: 0.08 },
  { emoji: '🎮', top: null, right: '5%', left: null, bottom: '10%', size: '85px', opacity: 0.1 }
];

const Watermark = memo(({ item }) => (
  <Box sx={{
    position: 'absolute',
    top: item.top,
    left: item.left,
    right: item.right,
    bottom: item.bottom,
    fontSize: item.size,
    opacity: item.opacity,
    pointerEvents: 'none'
  }}>
    {item.emoji}
  </Box>
));

export const Home = () => {
  const { t, language, setLanguage } = useLanguage();
  const { isDarkMode, currentTheme, setTheme } = useTheme();
  const [themeAnchor, setThemeAnchor] = useState(null);
  const [langAnchor, setLangAnchor] = useState(null);

  const getHomeBackground = () => {
    return isDarkMode
      ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      : 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 50%, #f0f4ff 100%)';
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2.5,
      background: getHomeBackground(),
      position: 'relative',
      overflow: 'hidden'
    }}>
      {WATERMARKS.map((item, idx) => <Watermark key={idx} item={item} />)}

      <Box sx={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        width: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          justifyContent: 'center',
          animation: 'bounce 2s infinite'
        }}>
          <span style={{ fontSize: '2.5rem' }}>🎮</span>
          <Typography variant="h4" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            color: '#333',
            fontWeight: '800',
            background: isDarkMode
              ? 'linear-gradient(135deg, #8b9ef7 0%, #ff6b9d 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #e84c89 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            m: 0
          }}>
            {t('playGames')}
          </Typography>
        </Box>

        <Typography sx={{
          fontSize: { xs: '0.85rem', md: '0.95rem' },
          color: isDarkMode ? '#b0b0b0' : '#666',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          {t('chooseGame')}
        </Typography>

        <GamesGrid maxWidth="600px" columns={{ xs: '1fr', sm: '1fr 1fr' }} />

        <Box sx={{
          display: 'flex',
          gap: 4,
          justifyContent: 'center',
          mt: 2,
          opacity: 0.6
        }}>
          <Box sx={{ fontSize: '1.5rem' }}>✨</Box>
          <Box sx={{ fontSize: '1.5rem' }}>⭐</Box>
          <Box sx={{ fontSize: '1.5rem' }}>✨</Box>
        </Box>

        <Box sx={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          gap: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          flexWrap: 'wrap',
          width: '100%',
          left: 0,
          right: 0
        }}>
          <Button
            onClick={(e) => setThemeAnchor(e.currentTarget)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: isDarkMode ? 'rgba(139, 158, 247, 0.2)' : `rgba(232, 76, 137, 0.1)`,
              border: isDarkMode ? `1px solid rgba(139, 158, 247, 0.4)` : `1px solid #ddd`,
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '0.65rem',
              fontWeight: '600',
              color: isDarkMode ? '#b0b0b0' : '#333',
              minHeight: 'auto',
              height: '24px',
              textTransform: 'none',
              '&:hover': {
                background: isDarkMode ? 'rgba(139, 158, 247, 0.3)' : `rgba(232, 76, 137, 0.15)`,
                borderColor: isDarkMode ? 'rgba(139, 158, 247, 0.6)' : '#ccc'
              }
            }}
          >
            <Box sx={{ marginRight: '4px', width: '8px', height: '8px', background: THEME_OPTIONS.find(t => t.code === currentTheme)?.color, borderRadius: '1px', display: 'inline-block' }} />
            {currentTheme.substring(0, 2).toUpperCase()}
          </Button>
          <Menu
            anchorEl={themeAnchor}
            open={Boolean(themeAnchor)}
            onClose={() => setThemeAnchor(null)}
          >
            {THEME_OPTIONS.map(({ code, label, color }) => (
              <MenuItem
                key={code}
                onClick={() => {
                  setTheme(code);
                  setThemeAnchor(null);
                }}
                sx={{ fontSize: '0.65rem' }}
              >
                <Box sx={{ marginRight: '6px', fontSize: '1rem', width: '8px', height: '8px', background: color, borderRadius: '1px', display: 'inline-block' }} />
                {label}
              </MenuItem>
            ))}
          </Menu>

          <Button
            onClick={(e) => setLangAnchor(e.currentTarget)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: isDarkMode ? 'rgba(139, 158, 247, 0.2)' : `rgba(232, 76, 137, 0.1)`,
              border: isDarkMode ? `1px solid rgba(139, 158, 247, 0.4)` : `1px solid #ddd`,
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '0.65rem',
              fontWeight: '600',
              color: isDarkMode ? '#b0b0b0' : '#333',
              minHeight: 'auto',
              height: '24px',
              textTransform: 'none',
              '&:hover': {
                background: isDarkMode ? 'rgba(139, 158, 247, 0.3)' : `rgba(232, 76, 137, 0.15)`,
                borderColor: isDarkMode ? 'rgba(139, 158, 247, 0.6)' : '#ccc'
              }
            }}
          >
            {language.toUpperCase()}
          </Button>
          <Menu
            anchorEl={langAnchor}
            open={Boolean(langAnchor)}
            onClose={() => setLangAnchor(null)}
          >
            {['en', 'es', 'pt', 'fr', 'hi'].map(lang => (
              <MenuItem
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setLangAnchor(null);
                }}
                sx={{ fontSize: '0.65rem' }}
              >
                {lang.toUpperCase()}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
};
