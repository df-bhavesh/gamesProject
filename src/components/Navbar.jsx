import { AppBar, Toolbar, Box, Typography, Button, Drawer, IconButton, Menu, MenuItem } from '@mui/material';
import { memo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { GAMES_CONFIG } from '../config/games';
import { COLORS } from '../config/theme';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' }
];

const navLinkSx = { color: COLORS.TEXT_DARK, cursor: 'pointer', fontWeight: '500', '&:hover': { color: COLORS.PRIMARY } };
const selectSx = { background: 'transparent', border: 'none', color: COLORS.TEXT_DARK, fontWeight: '500' };

export const Navbar = memo(() => {
  const { language, setLanguage, t } = useLanguage();
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langAnchor, setLangAnchor] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const getTitle = () => {
    if (location.pathname === '/toss-coin') return t('coinFlip');
    if (location.pathname === '/dice-roller') return t('diceRollerTitle');
    return t('coinFlip');
  };

  const getIcon = () => {
    if (location.pathname === '/dice-roller') return '🎲';
    return '🪙';
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: theme.palette.background.paper, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', top: 0, zIndex: 100 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: { xs: '0.5rem 0.75rem', md: '0.75rem 2rem' }, minHeight: { xs: '64px', md: '72px' }, width: '100%' }}>
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 }
            }}
          >
            <Box sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' } }}>{getIcon()}</Box>
            <Typography variant="h6" sx={{ color: isDarkMode ? '#ffffff' : COLORS.TEXT_DARK, fontWeight: '700', m: 0, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              {getTitle()}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: isDarkMode ? '#b0b0b0' : COLORS.TEXT_DARK,
                fontSize: '1.3rem',
                '&:hover': { color: COLORS.PRIMARY }
              }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </IconButton>

            <Button
              onClick={(e) => setLangAnchor(e.currentTarget)}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                background: isDarkMode ? 'rgba(139, 158, 247, 0.2)' : `${COLORS.PRIMARY}14`,
                border: isDarkMode ? `1px solid rgba(139, 158, 247, 0.4)` : `1px solid ${COLORS.PRIMARY}33`,
                borderRadius: '5px',
                padding: '2px 6px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: isDarkMode ? '#b0b0b0' : COLORS.TEXT_DARK,
                minHeight: 'auto',
                height: '28px',
                textTransform: 'none',
                '&:hover': {
                  background: isDarkMode ? 'rgba(139, 158, 247, 0.3)' : `${COLORS.PRIMARY}1f`,
                  borderColor: isDarkMode ? 'rgba(139, 158, 247, 0.6)' : COLORS.PRIMARY
                }
              }}
            >
              <span style={{ marginRight: '4px' }}>{LANGUAGES.find(l => l.code === language)?.flag}</span>
              {language.toUpperCase()}
            </Button>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
            >
              {LANGUAGES.map(({ code, label, flag }) => (
                <MenuItem
                  key={code}
                  onClick={() => {
                    setLanguage(code);
                    setLangAnchor(null);
                  }}
                  sx={{ fontSize: '0.85rem' }}
                >
                  <span style={{ marginRight: '6px' }}>{flag}</span>
                  {label}
                </MenuItem>
              ))}
            </Menu>

            <Button sx={{ display: { xs: 'none', md: 'block' }, color: isDarkMode ? '#b0b0b0' : COLORS.TEXT_DARK, textTransform: 'none', fontWeight: '600', '&:hover': { color: COLORS.PRIMARY } }}>
              {t('logIn')}
            </Button>
            <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' }, background: COLORS.PRIMARY, color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { background: COLORS.PRIMARY_DARK } }}>
              {t('signUp')}
            </Button>

            <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: COLORS.TEXT_DARK, fontSize: '1.5rem' }} onClick={() => setMobileOpen(true)}>
              ☰
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ '& .MuiDrawer-paper': { background: theme.palette.background.default } }}>
        <Box sx={{ width: '250px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography sx={{ fontWeight: '700', color: isDarkMode ? '#ffffff' : COLORS.TEXT_DARK, mb: 1 }}>Games</Typography>
          {GAMES_CONFIG.map(game => (
            <Button
              key={game.id}
              onClick={() => {
                navigate(game.path);
                setMobileOpen(false);
              }}
              sx={{
                color: isDarkMode ? '#b0b0b0' : COLORS.TEXT_DARK,
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.8rem',
                padding: '6px 10px',
                textTransform: 'none',
                justifyContent: 'flex-start',
                minHeight: 'auto',
                '&:hover': { color: COLORS.PRIMARY }
              }}
            >
              <span style={{ marginRight: '0.5rem', fontSize: '1rem' }}>{game.icon}</span>
              {t(game.nameKey)}
            </Button>
          ))}

          <Box sx={{ borderTop: `1px solid ${isDarkMode ? '#404040' : COLORS.BORDER_LIGHT}`, pt: 2, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography sx={{ color: isDarkMode ? '#ffffff' : COLORS.TEXT_DARK, fontWeight: '700', fontSize: '0.95rem' }}>Theme</Typography>
              <IconButton onClick={toggleTheme} size="small" sx={{ color: COLORS.PRIMARY }}>
                {isDarkMode ? '☀️' : '🌙'}
              </IconButton>
            </Box>

            <Typography sx={{ color: isDarkMode ? '#ffffff' : COLORS.TEXT_DARK, fontWeight: '700', mb: 1.5, fontSize: '0.95rem' }}>Language</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {LANGUAGES.map(({ code, label, flag }) => (
                <Button
                  key={code}
                  onClick={() => setLanguage(code)}
                  sx={{
                    background: language === code ? `${COLORS.PRIMARY}26` : isDarkMode ? 'rgba(255,255,255,0.05)' : 'transparent',
                    color: language === code ? COLORS.PRIMARY : isDarkMode ? '#b0b0b0' : COLORS.TEXT_DARK,
                    border: `1px solid ${language === code ? COLORS.PRIMARY : isDarkMode ? '#404040' : COLORS.BORDER}`,
                    padding: '6px 10px',
                    textTransform: 'none',
                    fontWeight: language === code ? '700' : '500',
                    justifyContent: 'flex-start',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    minHeight: 'auto',
                    '&:hover': {
                      background: language === code ? `${COLORS.PRIMARY}26` : isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(232, 76, 137, 0.05)',
                      borderColor: COLORS.PRIMARY
                    }
                  }}
                >
                  <span style={{ marginRight: '6px', fontSize: '1rem' }}>{flag}</span>
                  {label}
                </Button>
              ))}
            </Box>

            <Button fullWidth sx={{ color: '#333', textTransform: 'none', fontWeight: '600', mb: 1, '&:hover': { color: '#e84c89' } }}>
              {t('logIn')}
            </Button>
            <Button fullWidth variant="contained" sx={{ background: '#e84c89', color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { background: '#d63a75' } }}>
              {t('signUp')}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
});
