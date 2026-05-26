# 🎮 Spica - Game AI Hub

AI-powered game recommendation platform with Gemini integration.

## Features

- ✨ **51 Games Database** - Comprehensive game library
- 🤖 **AI Chatbot** - Powered by Google Gemini API
- 💬 **Game Recommendations** - Based on user preferences
- 💰 **Price Comparison** - Find the cheapest deals
- 🎯 **Platform Filter** - PC, PlayStation, Xbox, Switch, Mobile
- ❤️ **Wishlist** - Save favorite games
- ✓ **Played Games** - Track your gaming history
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL
- **AI**: Google Gemini API

## Setup Instructions

### 1. Database Setup

```bash
mysql -u root -p < database.sql
mysql -u root -p < games_data.sql
```

### 2. Configuration

Edit `config.php` and add your Gemini API Key:

```php
define('GEMINI_API_KEY', 'YOUR_API_KEY_HERE');
```

Get your API Key from: https://aistudio.google.com/app/apikey

### 3. Run Locally

```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## File Structure

```
spicaaa/
├── index.html           # Main page
├── profile.html         # User profile
├── styles.css           # Main styles (soft purple & yellow theme)
├── script.js            # Frontend logic
├── config.php           # Configuration & database connection
├── chatbot.php          # Gemini API integration
├── database.sql         # Database schema
├── games_data.sql       # 51 games data
├── logo.png             # Spica logo
└── README.md            # This file
```

## Database Schema

- **genres** - Game genres
- **games** - Game information (51 games)
- **users** - User accounts
- **user_liked_games** - User's favorite games
- **user_played_games** - Games user has played
- **chat_history** - AI conversation history

## Features Coming Soon

- [ ] User authentication
- [ ] Real-time price tracking
- [ ] Steam integration
- [ ] User ratings & reviews
- [ ] Multiplayer games filter

## Color Scheme

- Primary Purple: `#B8A7D9` (soft)
- Primary Yellow: `#F4E4C1` (soft)
- Dark Purple: `#8B7BA8`
- Light Yellow: `#FBF8F0`

## License

MIT License - Feel free to use for personal projects!
