# 🎮 Online Games Hub

A modern, production-ready web application featuring 3D coin flip and dice roller games, built with React. Includes beautiful animations, multi-language support (5 languages), and 6 stunning theme options.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

- **Coin Flip Game**: Virtual coin flip with smooth 3D rotation animations and statistics tracking
- **Dice Roller Game**: Customizable dice roller (1-4 dice, 2-6 sided) with animated rolling effects
- **Multi-Language Support**: English, Spanish, Portuguese, French, and Hindi
- **Theme System**: 6 beautiful themes (Light, Dark, Blue, Purple, Green, Orange)
- **Dark Mode**: Fully functional dark/light theme switching
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Animated Watermarks**: Slow-flipping coin/dice background effects (desktop only)
- **Real-time Statistics**: Track heads/tails counts for coin flip game
- **Smooth Animations**: CSS-based 3D transforms and flip animations
- **Material-UI Components**: Professional, accessible UI components

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5+
- **State Management**: Zustand
- **Routing**: React Router v6
- **Styling**: Emotion (CSS-in-JS)
- **Icons & Emojis**: Native support
- **Internationalization**: Custom LanguageContext

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Setup Steps

1. **Navigate to project directory**
   ```bash
   cd coin-flip-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install required packages** (if not already installed)
   ```bash
   npm install @mui/material @emotion/react @emotion/styled zustand react-router-dom
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Usage

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Features Overview

#### Coin Flip Page
- Click "Flip Coin" button to flip a virtual coin
- Watch smooth 3D rotation animation
- View real-time heads/tails statistics
- Results persist during session

#### Dice Roller Page
- Adjust number of dice (1-4) using input field
- Adjust number of sides (2-6) using input field
- Click "Roll" to roll the dice
- View individual dice face values
- Reset for new game

#### Theme & Language
- **Home Page**: Select theme and language from dropdown buttons at bottom
- **Navbar**: Theme and language selectors on desktop (side-by-side)
- **Mobile**: Language selector in hamburger menu
- Changes apply instantly across all pages

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar with theme/language selectors
│   ├── Header.jsx          # Page title and description
│   ├── Statistics.jsx      # Heads/tails counter (coin flip)
│   ├── CoinDisplay.jsx     # 3D coin visual with text
│   ├── Dice.jsx            # Individual dice face component
│   ├── Footer.jsx          # Generic footer component
│   └── GamesGrid.jsx       # Games selection grid
├── pages/
│   ├── Home.jsx            # Landing page with game selection
│   ├── CoinFlip.jsx        # Coin flip game page
│   └── DiceRoller.jsx      # Dice roller game page
├── store/
│   ├── gameStore.js        # Zustand store for coin flip game
│   └── diceStore.js        # Zustand store for dice roller game
├── context/
│   ├── LanguageContext.jsx # Multi-language context & provider
│   └── ThemeContext.jsx    # Theme management context & provider
├── config/
│   ├── translations.js     # Language translations (5 languages)
│   ├── theme.js            # Color constants and styling config
│   ├── muiTheme.js         # Material-UI theme definitions
│   └── games.js            # Centralized games configuration
├── App.jsx                 # Main app component with routing
└── main.jsx                # Entry point
```

## 🎨 Themes

### Available Themes
1. **Light** - Pink primary color (#e84c89), white background
2. **Dark** - Blue primary color (#667eea), dark background
3. **Blue** - Classic blue (#1976d2), light background
4. **Purple** - Purple (#9c27b0), light background
5. **Green** - Green (#4caf50), light background
6. **Orange** - Orange (#ff9800), light background

### Theme Files
- `src/config/muiTheme.js` - Material-UI theme definitions
- `src/context/ThemeContext.jsx` - Theme state management

## 🌍 Languages

### Supported Languages
- 🇬🇧 English
- 🇪🇸 Spanish
- 🇧🇷 Portuguese
- 🇫🇷 French
- 🇮🇳 Hindi

### Translation Files
- `src/config/translations.js` - All translation strings

## 🎬 Animations

### Coin Flip Animation
- **Duration**: 0.6s (game logic)
- **Visual**: 3 seconds continuous rotateY (0-360deg)
- **Easing**: Linear smooth rotation

### Dice Roll Animation
- **Duration**: 0.6s (game logic)
- **Visual**: Bouncing and rotating effect

### Watermark Animations (Desktop Only)
- **Flipping coins/dice**: 1.2s continuous flip animation
- **Speed**: Slow, elegant flipping at 1500ms intervals per watermark
- **Hidden on mobile**: Only visible on desktop for clean mobile UI

## 💾 State Management

### Zustand Stores

#### Game Store (`gameStore.js`)
- `heads`: Count of heads flipped
- `tails`: Count of tails flipped
- `isFlipping`: Boolean for flip animation state
- `result`: Current flip result ('heads' or 'tails')
- `flip()`: Execute coin flip logic
- `undo()`: Undo last flip
- `reset()`: Clear statistics

#### Dice Store (`diceStore.js`)
- `numDice`: Number of dice (1-4)
- `numSides`: Sides per die (2-6)
- `result`: Total dice roll result
- `isRolling`: Boolean for roll animation state
- `diceValues`: Array of individual die values
- `rollDice()`: Execute dice roll
- `reset()`: Clear results

## 🌐 Internationalization

### Adding a New Language

1. **Add translation strings** to `src/config/translations.js`:
   ```javascript
   const translations = {
     xx: { // language code
       playGames: 'Translation here',
       // ... more keys
     }
   };
   ```

2. **Add language selector option** in relevant components:
   - `src/components/Navbar.jsx` - LANGUAGES array
   - `src/pages/Home.jsx` - Language menu

## 🎮 Adding New Games

1. **Create game component**: `src/pages/NewGame.jsx`
2. **Create Zustand store**: `src/store/newGameStore.js`
3. **Add to GAMES_CONFIG** in `src/config/games.js`
4. **Add translations** for game name and strings
5. **Add route** in `src/App.jsx`

## 🎨 Customization

### Modifying Colors

- **Primary colors**: `src/config/theme.js` (COLORS object)
- **Theme definitions**: `src/config/muiTheme.js` (theme files)
- **Component styles**: Inline `sx` props in components

## 📱 Responsive Breakpoints

- **Mobile (xs)**: < 600px
- **Tablet (sm)**: 600px - 960px
- **Desktop (md)**: > 960px

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📝 Notes

- **Session Persistence**: Game statistics persist during session but reset on page refresh
- **No Backend**: Pure frontend application with no backend dependencies
- **Mobile Optimized**: Touch-friendly buttons and spacing
- **Accessibility**: ARIA labels and semantic HTML throughout

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Bhavesh Krishan Garg**
- Email: bhaveshgarg2005@gmail.com
- © 2026 Games Hub

---

