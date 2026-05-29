import { Box, Typography, Button, TextField } from '@mui/material';
import { useDiceStore } from '../store/diceStore';
import DiceFace from '../components/Dice';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { COLORS, NUMBER_INPUT_SX } from '../config/theme';

export const DiceRoller = () => {
  const { numDice, numSides, result, isRolling, diceValues, setNumDice, setNumSides, rollDice, reset } = useDiceStore();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();

  const getRollButtonText = () => {
    if (isRolling) return t('rolling');
    if (result !== null) return t('rollAgain');
    return t('rollDice');
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: { xs: '0.5rem 1.5rem 0.75rem', sm: '0.5rem 2rem 0.75rem', md: '0.5rem 2.5rem 0.75rem' },
      width: '100%',
      boxSizing: 'border-box',
      flex: 1,
      gap: 1
    }}>
      <Typography variant="h3" sx={{ fontWeight: '700', color: isDarkMode ? '#ffffff' : '#000', fontSize: { xs: '1.1rem', md: '1.5rem' }, m: 0 }}>
        {t('diceRollerTitle')}
      </Typography>

      {result !== null && (
        <Box sx={{
          padding: '0 2rem 0',
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.75
        }}>
          <Box sx={{ mb: 0.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: isDarkMode ? '#b0b0b0' : '#666', mb: 0.1, fontWeight: '500' }}>
              {t('yourResult')}
            </Typography>
            <Typography sx={{ fontSize: '3rem', fontWeight: '900', color: '#667eea' }}>
              {result}
            </Typography>
          </Box>

          {diceValues.length > 0 && (
            <Box sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%'
            }}>
              {diceValues.map((value, idx) => (
                <DiceFace key={idx} value={value} />
              ))}
            </Box>
          )}
        </Box>
      )}

      <Box sx={{
        display: 'flex',
        gap: 1.5,
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        maxWidth: '400px',
        justifyContent: 'center'
      }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: '0.7rem', color: '#666', mb: 0.25, fontWeight: '600' }}>
            {t('numberOfDice')}
          </Typography>
          <TextField
            type="number"
            value={numDice}
            onChange={(e) => setNumDice(parseInt(e.target.value) || 1)}
            slotProps={{ input: { min: 1, max: 4 } }}
            size="small"
            sx={{ width: '100%', ...NUMBER_INPUT_SX }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: '0.7rem', color: '#666', mb: 0.25, fontWeight: '600' }}>
            {t('numberOfSides')}
          </Typography>
          <TextField
            type="number"
            value={numSides}
            onChange={(e) => setNumSides(parseInt(e.target.value) || 6)}
            slotProps={{ input: { min: 2, max: 6 } }}
            size="small"
            sx={{ width: '100%', ...NUMBER_INPUT_SX }}
          />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
        <Button
          onClick={rollDice}
          disabled={isRolling}
          variant="contained"
          sx={{
            background: isDarkMode ? '#8b9ef7' : '#667eea',
            color: 'white',
            padding: '10px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'none',
            borderRadius: '6px',
            flex: 1,
            '&:hover:not(:disabled)': {
              background: isDarkMode ? '#6f7de6' : '#5568d3'
            },
            opacity: isRolling ? 0.6 : 1,
            transition: 'all 0.2s'
          }}
        >
          {getRollButtonText()}
        </Button>

        {result !== null && (
          <Button
            onClick={reset}
            variant="outlined"
            sx={{
              color: isDarkMode ? '#8b9ef7' : '#667eea',
              borderColor: isDarkMode ? '#8b9ef7' : '#667eea',
              textTransform: 'none',
              fontWeight: '600',
              padding: '10px 30px',
              flex: 1,
              '&:hover': {
                background: isDarkMode ? 'rgba(139, 158, 247, 0.1)' : '#f0f0f0',
                borderColor: isDarkMode ? '#8b9ef7' : '#667eea'
              }
            }}
          >
            {t('reset')}
          </Button>
        )}
      </Box>
    </Box>
  );
};
