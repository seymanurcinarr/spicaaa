-- Spica Game AI Hub Database

CREATE DATABASE IF NOT EXISTS spica_games;
USE spica_games;

-- Genres Table
CREATE TABLE genres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Games Table
CREATE TABLE games (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    genre_id INT NOT NULL,
    platforms JSON NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Liked Games
CREATE TABLE user_liked_games (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    liked BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_game (user_id, game_id)
);

-- User Played Games
CREATE TABLE user_played_games (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    hours_played INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_played_game (user_id, game_id)
);

-- Chat History (for AI conversations)
CREATE TABLE chat_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    user_message TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert Genres
INSERT INTO genres (name) VALUES
('Sandbox / Survival'),
('Açık Dünya / Aksiyon'),
('Açık Dünya / Aksiyon-Macera'),
('RPG / Açık Dünya'),
('Action RPG / Soulslike'),
('RPG'),
('Aksiyon / Macera'),
('Hikâye / Aksiyon-Macera'),
('Soulslike / Action RPG'),
('Soulslike / Aksiyon'),
('Battle Royale'),
('Battle Royale / Hero Shooter'),
('Battle Royale / FPS'),
('FPS / Rekabetçi'),
('FPS / Taktik Shooter'),
('Hero Shooter / FPS'),
('MOBA'),
('Auto Battler'),
('Spor / Arcade'),
('Spor / Futbol'),
('Spor / Basketbol'),
('Yarış / Açık Dünya'),
('Yarış / Simülasyon'),
('Yarış / Arcade'),
('Platform'),
('Metroidvania'),
('Platform / Run & Gun'),
('Farming Sim / Yaşam Simülasyonu'),
('Survival / Keşif'),
('Yaşam Simülasyonu'),
('Uçuş Simülasyonu'),
('Şehir Kurma / Simülasyon'),
('RTS / Strateji');