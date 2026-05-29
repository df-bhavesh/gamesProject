import { Box, Button } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GAMES_CONFIG } from '../config/games';

export const GamesGrid = memo(({ maxWidth = '600px', columns = { xs: '1fr', sm: '1fr 1fr' } }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: columns,
      gap: 2,
      width: '100%',
      maxWidth,
      justifyContent: 'center',
      px: 2
    }}>
      {GAMES_CONFIG.map(game => (
        <Button
          key={game.id}
          onClick={() => navigate(game.path)}
          variant="contained"
          sx={{
            background: `linear-gradient(135deg, ${game.gradient})`,
            color: 'white',
            padding: '10px 25px',
            fontSize: { xs: '0.8rem', md: '0.85rem' },
            fontWeight: '700',
            textTransform: 'none',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.75,
            boxShadow: `0 6px 12px ${game.shadow}0.25)`,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: `0 10px 20px ${game.shadow}0.35)`
            }
          }}
        >
          <span style={{ fontSize: '1.1rem' }}>{game.icon}</span>
          {t(game.nameKey)}
        </Button>
      ))}
    </Box>
  );
});
