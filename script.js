// Spica Game AI Hub - Main Script

let allGames = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
});

// Load games from server
function loadGames() {
    // Mock data - In production, this will come from PHP/Database
    const gamesData = [
        { id: 1, name: 'Minecraft', genre: 'Sandbox / Survival', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'] },
        { id: 2, name: 'Grand Theft Auto V', genre: 'Açık Dünya / Aksiyon', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 3, name: 'Red Dead Redemption 2', genre: 'Açık Dünya / Aksiyon-Macera', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 4, name: 'The Witcher 3: Wild Hunt', genre: 'RPG / Açık Dünya', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 5, name: 'Elden Ring', genre: 'Action RPG / Soulslike', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 6, name: 'Cyberpunk 2077', genre: 'RPG / Açık Dünya', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 7, name: 'Skyrim', genre: 'RPG / Açık Dünya', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 8, name: 'God of War Ragnarök', genre: 'Aksiyon / Macera', platforms: ['PlayStation'] },
        { id: 9, name: 'Ghost of Tsushima', genre: 'Aksiyon / Açık Dünya', platforms: ['PlayStation', 'PC'] },
        { id: 10, name: 'Spider-Man 2', genre: 'Aksiyon / Açık Dünya', platforms: ['PlayStation'] },
        { id: 11, name: 'The Last of Us', genre: 'Hikâye / Aksiyon-Macera', platforms: ['PlayStation', 'PC'] },
        { id: 12, name: 'Uncharted 4', genre: 'Aksiyon / Macera', platforms: ['PlayStation', 'PC'] },
        { id: 13, name: 'Horizon Forbidden West', genre: 'Açık Dünya / RPG', platforms: ['PlayStation', 'PC'] },
        { id: 14, name: 'Bloodborne', genre: 'Soulslike / Action RPG', platforms: ['PlayStation'] },
        { id: 15, name: 'Sekiro: Shadows Die Twice', genre: 'Soulslike / Aksiyon', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 16, name: 'Dark Souls III', genre: 'Soulslike / RPG', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 17, name: 'Fortnite', genre: 'Battle Royale', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'] },
        { id: 18, name: 'PUBG: Battlegrounds', genre: 'Battle Royale', platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile'] },
        { id: 19, name: 'Apex Legends', genre: 'Battle Royale / Hero Shooter', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 20, name: 'Call of Duty: Warzone', genre: 'Battle Royale / FPS', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 21, name: 'Counter-Strike 2', genre: 'FPS / Rekabetçi', platforms: ['PC'] },
        { id: 22, name: 'Valorant', genre: 'FPS / Taktik Shooter', platforms: ['PC'] },
        { id: 23, name: 'Rainbow Six Siege', genre: 'FPS / Taktik Shooter', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 24, name: 'Overwatch 2', genre: 'Hero Shooter / FPS', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 25, name: 'League of Legends', genre: 'MOBA', platforms: ['PC'] },
        { id: 26, name: 'Dota 2', genre: 'MOBA', platforms: ['PC'] },
        { id: 27, name: 'Teamfight Tactics', genre: 'Auto Battler', platforms: ['PC', 'Mobile'] },
        { id: 28, name: 'Rocket League', genre: 'Spor / Arcade', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 29, name: 'FIFA 23', genre: 'Spor / Futbol', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 30, name: 'EA Sports FC 25', genre: 'Spor / Futbol', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 31, name: 'NBA 2K24', genre: 'Spor / Basketbol', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 32, name: 'Forza Horizon 5', genre: 'Yarış / Açık Dünya', platforms: ['PC', 'Xbox'] },
        { id: 33, name: 'Gran Turismo 7', genre: 'Yarış / Simülasyon', platforms: ['PlayStation'] },
        { id: 34, name: 'Need for Speed Heat', genre: 'Yarış / Arcade', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 35, name: 'Mario Kart 8 Deluxe', genre: 'Yarış / Arcade', platforms: ['Switch'] },
        { id: 36, name: 'Super Mario Odyssey', genre: 'Platform', platforms: ['Switch'] },
        { id: 37, name: 'The Legend of Zelda: Breath of the Wild', genre: 'Açık Dünya / Macera', platforms: ['Switch'] },
        { id: 38, name: 'The Legend of Zelda: Tears of the Kingdom', genre: 'Açık Dünya / Macera', platforms: ['Switch'] },
        { id: 39, name: 'Animal Crossing: New Horizons', genre: 'Yaşam Simülasyonu', platforms: ['Switch'] },
        { id: 40, name: 'Hollow Knight', genre: 'Metroidvania', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 41, name: 'Cuphead', genre: 'Platform / Run & Gun', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 42, name: 'Celeste', genre: 'Platform', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 43, name: 'Terraria', genre: 'Sandbox / Survival', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'] },
        { id: 44, name: 'Stardew Valley', genre: 'Farming Sim / Yaşam Simülasyonu', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'] },
        { id: 45, name: 'Subnautica', genre: 'Survival / Keşif', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 46, name: 'The Sims 4', genre: 'Yaşam Simülasyonu', platforms: ['PC', 'PlayStation', 'Xbox'] },
        { id: 47, name: 'Microsoft Flight Simulator', genre: 'Uçuş Simülasyonu', platforms: ['PC', 'Xbox'] },
        { id: 48, name: 'Cities: Skylines', genre: 'Şehir Kurma / Simülasyon', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'] },
        { id: 49, name: 'Age of Empires II', genre: 'RTS / Strateji', platforms: ['PC', 'Xbox'] },
        { id: 50, name: 'Fortnite', genre: 'Battle Royale', platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile'] },
        { id: 51, name: 'Cyberpunk 2077', genre: 'RPG / Açık Dünya', platforms: ['PC', 'PlayStation', 'Xbox'] }
    ];

    allGames = gamesData;
    displayGames(allGames);
}

// Display games in grid
function displayGames(games) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    if (games.length === 0) {
        gamesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">Oyun bulunamadı</p>';
        return;
    }

    games.forEach(game => {
        const card = createGameCard(game);
        gamesGrid.appendChild(card);
    });
}

// Create game card HTML
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';

    const platformsHTML = game.platforms.map(p => `<span class="platform-tag">${p}</span>`).join('');

    card.innerHTML = `
        <div class="game-image">
            🎮
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.name}</h3>
            <span class="game-genre">${game.genre}</span>
            <div class="game-platforms">
                ${platformsHTML}
            </div>
            <div class="game-actions">
                <button class="btn btn-like" onclick="toggleLike(${game.id})">❤️ Beğen</button>
                <button class="btn btn-played" onclick="togglePlayed(${game.id})">✓ Oynadım</button>
            </div>
        </div>
    `;

    return card;
}

// Filter games
function filterGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value.toLowerCase();
    const platformFilter = document.getElementById('platformFilter').value.toLowerCase();

    const filtered = allGames.filter(game => {
        const matchSearch = game.name.toLowerCase().includes(searchInput) || game.genre.toLowerCase().includes(searchInput);
        const matchGenre = !genreFilter || game.genre.toLowerCase().includes(genreFilter);
        const matchPlatform = !platformFilter || game.platforms.some(p => p.toLowerCase().includes(platformFilter));

        return matchSearch && matchGenre && matchPlatform;
    });

    displayGames(filtered);
}

// Toggle like
function toggleLike(gameId) {
    console.log('Liked game:', gameId);
    // Will be connected to database later
}

// Toggle played
function togglePlayed(gameId) {
    console.log('Marked as played:', gameId);
    // Will be connected to database later
}

// Chat functions
function toggleChat() {
    const chatBox = document.querySelector('.chat-box');
    chatBox.classList.toggle('hidden');
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message to chat
    addChatMessage(message, 'user');
    input.value = '';

    // Simulate AI response
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        addChatMessage(aiResponse, 'ai');
    }, 500);
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function addChatMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${sender}`;
    messageEl.textContent = text;
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
    // Simple mock AI responses - will be replaced with Gemini API
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('rpg')) {
        return '🎮 RPG oyunları bilirim! The Witcher 3, Elden Ring, Cyberpunk 2077 gibi harika oyunlar var. Hangisini denemek istersin?';
    } else if (lowerMessage.includes('fiyat') || lowerMessage.includes('ucuz')) {
        return '💰 Fiyat bilgisi için Gemini API ile bağlanılacak. Steam, Epic Games Store gibi platformlardaki güncel fiyatları bulabilirim!';
    } else if (lowerMessage.includes('oyna') || lowerMessage.includes('oyun')) {
        return '🎯 Hangi tür oyun oynamak istiyorsun? Action, RPG, FPS, Strateji, Spor veya Yarış oyunları var.';
    } else {
        return '👾 Merhaba! Ben Spica AI. Oyun önermeleri, fiyat karşılaştırması, platform uyumluluğu hakkında sorular sorabilirssin. Ne yardımcı olabilir?';
    }
}