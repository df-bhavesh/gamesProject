import { Box, Typography, Button, TextField } from '@mui/material';
import { memo, useState, useEffect } from 'react';
import { useDiceStore } from '../store/diceStore';
import DiceFace from '../components/Dice';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { COLORS, NUMBER_INPUT_SX } from '../config/theme';

const WATERMARKS = [
  // Top row
  { values: [1, 2], top: '3%', right: null, left: '1%', bottom: null, sizeMobile: '45px', sizeDesktop: '65px', opacityMobile: 0.08, opacityDesktop: 0.16, delay: '0s' },
  { values: [3, 4], top: '5%', right: '1%', left: null, bottom: null, sizeMobile: '50px', sizeDesktop: '70px', opacityMobile: 0.09, opacityDesktop: 0.18, delay: '0.5s' },

  // Upper middle
  { values: [5, 6], top: '22%', right: null, left: '1.5%', bottom: null, sizeMobile: '42px', sizeDesktop: '60px', opacityMobile: 0.07, opacityDesktop: 0.15, delay: '1s' },
  { values: [1, 3], top: '26%', right: '1.5%', left: null, bottom: null, sizeMobile: '46px', sizeDesktop: '65px', opacityMobile: 0.08, opacityDesktop: 0.16, delay: '1.5s' },

  // Middle
  { values: [2, 4], top: '45%', right: null, left: '1%', bottom: null, sizeMobile: '48px', sizeDesktop: '68px', opacityMobile: 0.08, opacityDesktop: 0.17, delay: '2s' },
  { values: [5, 6], top: '49%', right: '1%', left: null, bottom: null, sizeMobile: '44px', sizeDesktop: '62px', opacityMobile: 0.07, opacityDesktop: 0.15, delay: '2.5s' },

  // Lower middle
  { values: [1, 5], top: '68%', right: null, left: '1.5%', bottom: null, sizeMobile: '50px', sizeDesktop: '72px', opacityMobile: 0.09, opacityDesktop: 0.18, delay: '0.3s' },
  { values: [2, 6], top: '72%', right: '1.5%', left: null, bottom: null, sizeMobile: '47px', sizeDesktop: '68px', opacityMobile: 0.08, opacityDesktop: 0.17, delay: '0.8s' }
];

const DiceSVG = memo(({ value, size }) => {
  const s = parseInt(size);
  const dotRadius = s * 0.08;
  const getDots = (n) => {
    const configs = {
      1: [[s/2, s/2]],
      2: [[s/4, s/4], [3*s/4, 3*s/4]],
      3: [[s/4, s/4], [s/2, s/2], [3*s/4, 3*s/4]],
      4: [[s/4, s/4], [3*s/4, s/4], [s/4, 3*s/4], [3*s/4, 3*s/4]],
      5: [[s/4, s/4], [3*s/4, s/4], [s/2, s/2], [s/4, 3*s/4], [3*s/4, 3*s/4]],
      6: [[s/4, s/4], [s/4, s/2], [s/4, 3*s/4], [3*s/4, s/4], [3*s/4, s/2], [3*s/4, 3*s/4]]
    };
    return configs[n] || [];
  };

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${s} ${s}`} style={{ width: '100%', height: '100%' }}>
      <rect width={s} height={s} fill="white" rx={s * 0.1} />
      {getDots(value).map((dot, i) => (
        <circle key={i} cx={dot[0]} cy={dot[1]} r={dotRadius} fill="#333" />
      ))}
    </svg>
  );
});

const Watermark = memo(({ item, isDarkMode, diceValue }) => (
  <Box sx={{
    position: 'absolute',
    top: item.top,
    left: item.left,
    right: item.right,
    bottom: item.bottom,
    width: item.sizeDesktop,
    height: item.sizeDesktop,
    opacity: item.opacityDesktop,
    pointerEvents: 'none',
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8%',
    animation: `flip 1.2s infinite linear`,
    transition: 'all 0.5s ease'
  }}>
    <DiceSVG value={diceValue} size={item.sizeDesktop} />
  </Box>
));

export const DiceRoller = () => {
  const { numDice, numSides, result, isRolling, diceValues, setNumDice, setNumSides, rollDice, reset } = useDiceStore();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [watermarkResults, setWatermarkResults] = useState(
    WATERMARKS.map(item => item.values[0])
  );

  useEffect(() => {
    const intervals = WATERMARKS.map((item, idx) => {
      return setInterval(() => {
        setWatermarkResults(prev => {
          const updated = [...prev];
          const currentValue = updated[idx];
          const nextIdx = (item.values.indexOf(currentValue) + 1) % item.values.length;
          updated[idx] = item.values[nextIdx];
          return updated;
        });
      }, 1500 + idx * 300);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

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
      gap: 1,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {WATERMARKS.map((item, idx) => (
        <Watermark
          key={idx}
          item={item}
          isDarkMode={isDarkMode}
          diceValue={watermarkResults[idx]}
        />
      ))}

      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 1 }}>
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

      <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, width: '100%', maxWidth: '500px', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Button
          onClick={rollDice}
          disabled={isRolling}
          variant="contained"
          sx={{
            background: isDarkMode ? '#8b9ef7' : '#667eea',
            color: 'white',
            padding: { xs: '14px 40px', sm: '12px 35px' },
            fontSize: { xs: '1.1rem', sm: '1rem' },
            fontWeight: '700',
            textTransform: 'none',
            borderRadius: '8px',
            flex: 1,
            minHeight: { xs: '50px', sm: '44px' },
            '&:hover:not(:disabled)': {
              background: isDarkMode ? '#6f7de6' : '#5568d3',
              transform: 'scale(1.02)'
            },
            '&:active:not(:disabled)': {
              transform: 'scale(0.98)'
            },
            opacity: isRolling ? 0.6 : 1,
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
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
              fontWeight: '700',
              padding: { xs: '14px 40px', sm: '12px 35px' },
              fontSize: { xs: '1.1rem', sm: '1rem' },
              flex: 1,
              minHeight: { xs: '50px', sm: '44px' },
              border: '2px solid',
              '&:hover': {
                background: isDarkMode ? 'rgba(139, 158, 247, 0.15)' : 'rgba(102, 126, 234, 0.1)',
                borderColor: isDarkMode ? '#8b9ef7' : '#667eea',
                transform: 'scale(1.02)'
              },
              '&:active': {
                transform: 'scale(0.98)'
              },
              transition: 'all 0.2s'
            }}
          >
            {t('reset')}
          </Button>
        )}
      </Box>
      </Box>

      <style>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </Box>
  );
};
