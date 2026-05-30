import { Box, Button } from '@mui/material';
import { memo, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Statistics } from '../components/Statistics';
import { CoinDisplay } from '../components/CoinDisplay';
import { Footer } from '../components/Footer';
import { useGameStore } from '../store/gameStore';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const WATERMARKS = [
  // Top row
  { text: 'HEADS', top: '3%', right: null, left: '1%', bottom: null, sizeMobile: '45px', sizeDesktop: '65px', opacityMobile: 0.08, opacityDesktop: 0.16, delay: '0s' },
  { text: 'TAILS', top: '5%', right: '1%', left: null, bottom: null, sizeMobile: '50px', sizeDesktop: '70px', opacityMobile: 0.09, opacityDesktop: 0.18, delay: '0.5s' },

  // Upper middle
  { text: 'HEADS', top: '22%', right: null, left: '1.5%', bottom: null, sizeMobile: '42px', sizeDesktop: '60px', opacityMobile: 0.07, opacityDesktop: 0.15, delay: '1s' },
  { text: 'TAILS', top: '26%', right: '1.5%', left: null, bottom: null, sizeMobile: '46px', sizeDesktop: '65px', opacityMobile: 0.08, opacityDesktop: 0.16, delay: '1.5s' },

  // Middle
  { text: 'HEADS', top: '45%', right: null, left: '1%', bottom: null, sizeMobile: '48px', sizeDesktop: '68px', opacityMobile: 0.08, opacityDesktop: 0.17, delay: '2s' },
  { text: 'TAILS', top: '49%', right: '1%', left: null, bottom: null, sizeMobile: '44px', sizeDesktop: '62px', opacityMobile: 0.07, opacityDesktop: 0.15, delay: '2.5s' },

  // Lower middle
  { text: 'HEADS', top: '68%', right: null, left: '1.5%', bottom: null, sizeMobile: '50px', sizeDesktop: '72px', opacityMobile: 0.09, opacityDesktop: 0.18, delay: '0.3s' },
  { text: 'TAILS', top: '72%', right: '1.5%', left: null, bottom: null, sizeMobile: '47px', sizeDesktop: '68px', opacityMobile: 0.08, opacityDesktop: 0.17, delay: '0.8s' }
];

const Watermark = memo(({ item, isDarkMode, flipResult }) => (
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
    borderRadius: '50%',
    background: flipResult === 'HEADS'
      ? (isDarkMode ? '#ff6b9d' : '#e84c89')
      : (isDarkMode ? '#555555' : '#333'),
    fontSize: '0.55em',
    fontWeight: '700',
    color: 'white',
    whiteSpace: 'nowrap',
    animation: `flip 1.2s infinite linear`,
    transition: 'background 0.5s ease'
  }}>
    {flipResult}
  </Box>
));

export const CoinFlip = () => {
  const { heads, tails, isFlipping, result, flip } = useGameStore();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [watermarkResults, setWatermarkResults] = useState(
    WATERMARKS.map(item => item.text === 'HEADS' ? 'HEADS' : 'TAILS')
  );

  useEffect(() => {
    const intervals = WATERMARKS.map((item, idx) => {
      return setInterval(() => {
        setWatermarkResults(prev => {
          const updated = [...prev];
          updated[idx] = updated[idx] === 'HEADS' ? 'TAILS' : 'HEADS';
          return updated;
        });
      }, 1500 + idx * 300);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const flipButtonSx = {
    background: isDarkMode ? '#ff6b9d' : '#e84c89',
    color: 'white',
    padding: { xs: '14px 40px', sm: '14px 50px' },
    fontSize: { xs: '1.15rem', sm: '1.05rem' },
    fontWeight: '700',
    textTransform: 'none',
    borderRadius: '8px',
    minWidth: { xs: '160px', sm: '200px' },
    minHeight: { xs: '52px', sm: '48px' },
    transition: 'all 0.2s',
    boxShadow: '0 4px 12px rgba(232, 76, 137, 0.3)',
    '&:hover:not(:disabled)': {
      background: isDarkMode ? '#ff4d7f' : '#d63a75',
      transform: 'scale(1.02)',
      boxShadow: '0 6px 16px rgba(232, 76, 137, 0.4)'
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.98)'
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: { xs: '0.25rem 1.5rem 0.5rem', sm: '0.25rem 2rem 0.5rem', md: '0.25rem 2.5rem 0.5rem' },
      width: '100%',
      boxSizing: 'border-box',
      flex: 1,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {WATERMARKS.map((item, idx) => (
        <Watermark
          key={idx}
          item={item}
          isDarkMode={isDarkMode}
          flipResult={watermarkResults[idx]}
        />
      ))}

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 0.75, sm: 1, md: 1.25 }, position: 'relative', zIndex: 1 }}>
        <Header />
        <Statistics heads={heads} tails={tails} />
        <CoinDisplay result={result} isFlipping={isFlipping} />
        <Button onClick={flip} disabled={isFlipping} variant="contained" sx={{
          ...flipButtonSx,
          opacity: isFlipping ? 0.6 : 1
        }}>
          {isFlipping ? t('flipping') : t('flipCoin')}
        </Button>
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
