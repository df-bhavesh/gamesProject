import { Box } from '@mui/material';
import { memo } from 'react';

const DiceFace = memo(({ value }) => {
  const getDots = (num) => {
    const positions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [75, 25], [25, 75], [75, 75]],
      5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
      6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
    };
    return positions[num] || [];
  };

  return (
    <Box sx={{
      width: '70px',
      height: '70px',
      background: 'white',
      border: '2px solid #333',
      borderRadius: '4px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
    }}>
      {getDots(value).map((pos, idx) => (
        <Box
          key={idx}
          sx={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            background: '#333',
            borderRadius: '50%',
            left: `${pos[0]}%`,
            top: `${pos[1]}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </Box>
  );
});

export default DiceFace;
