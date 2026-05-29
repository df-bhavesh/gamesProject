import { Box, Typography, Button, IconButton } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { GamesGrid } from '../components/GamesGrid';

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
  const { isDarkMode, toggleTheme } = useTheme();

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
          gap: 1,
          alignItems: 'center',
          zIndex: 10,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: isDarkMode ? '#b0b0b0' : '#666', fontWeight: '500' }}>
              Theme:
            </Typography>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{
                fontSize: '0.9rem',
                padding: '2px 4px',
                color: '#e84c89',
                '&:hover': { background: 'rgba(232, 76, 137, 0.1)' }
              }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </IconButton>
          </Box>

          <Typography sx={{ fontSize: '0.75rem', color: isDarkMode ? '#b0b0b0' : '#666', fontWeight: '500' }}>
            Lang:
          </Typography>
          {['en', 'es', 'pt', 'fr', 'hi'].map(lang => (
            <Button
              key={lang}
              onClick={() => setLanguage(lang)}
              sx={{
                padding: '4px 8px',
                fontSize: '0.7rem',
                fontWeight: language === lang ? '700' : '500',
                textTransform: 'uppercase',
                color: language === lang ? '#e84c89' : isDarkMode ? '#b0b0b0' : '#666',
                background: language === lang ? 'rgba(232, 76, 137, 0.15)' : isDarkMode ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: `1px solid ${language === lang ? '#e84c89' : isDarkMode ? '#404040' : '#ddd'}`,
                borderRadius: '5px',
                minHeight: 'auto',
                '&:hover': { background: 'rgba(232, 76, 137, 0.1)' }
              }}
            >
              {lang.toUpperCase()}
            </Button>
          ))}
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
