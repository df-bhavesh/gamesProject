// Centralized Games Configuration
// To add a new game:
// 1. Import the game component
// 2. Add entry to GAMES_CONFIG
// 3. Add translations in translations.js
// Done!

export const GAMES_CONFIG = [
  {
    id: 'coin-flip',
    path: '/toss-coin',
    nameKey: 'coinFlip',
    icon: '🪙',
    gradient: '#e84c89 0%, #d63a75 100%',
    shadow: 'rgba(232, 76, 137, '
  },
  {
    id: 'dice-roller',
    path: '/dice-roller',
    nameKey: 'diceRoller',
    icon: '🎲',
    gradient: '#667eea 0%, #5568d3 100%',
    shadow: 'rgba(102, 126, 234, '
  },
  {
    id: 'archery',
    path: '/archery',
    nameKey: 'archery',
    icon: '🏹',
    gradient: '#f59e0b 0%, #d97706 100%',
    shadow: 'rgba(245, 158, 11, '
  },
  {
    id: 'spin-wheel',
    path: '/spin-wheel',
    nameKey: 'spinWheel',
    icon: '🎡',
    gradient: '#10b981 0%, #059669 100%',
    shadow: 'rgba(16, 185, 129, '
  },
  {
    id: 'lucky-draw',
    path: '/lucky-draw',
    nameKey: 'luckyDraw',
    icon: '🎁',
    gradient: '#ec4899 0%, #be185d 100%',
    shadow: 'rgba(236, 72, 153, '
  },
  {
    id: 'rock-paper',
    path: '/rock-paper',
    nameKey: 'rockPaper',
    icon: '✌️',
    gradient: '#8b5cf6 0%, #6d28d9 100%',
    shadow: 'rgba(139, 92, 246, '
  },
  {
    id: 'number-guess',
    path: '/number-guess',
    nameKey: 'numberGuess',
    icon: '🔢',
    gradient: '#06b6d4 0%, #0891b2 100%',
    shadow: 'rgba(6, 182, 212, '
  },
  {
    id: 'magic-ball',
    path: '/magic-ball',
    nameKey: 'magicBall',
    icon: '🔮',
    gradient: '#a855f7 0%, #7e22ce 100%',
    shadow: 'rgba(168, 85, 247, '
  }
];

// Example: To add a new game in future:
// {
//   id: 'new-game',
//   path: '/new-game',
//   nameKey: 'newGame',  // Add this to translations.js
//   icon: '🎮',
//   gradient: '#color1 0%, #color2 100%',
//   shadow: 'rgba(r, g, b, '
// }
