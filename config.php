<?php
// Spica Game AI Hub - Configuration

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'spica_games');

// Gemini API Configuration
// ⚠️ IMPORTANT: Replace with your actual API Key from:
// https://aistudio.google.com/app/apikey
define('GEMINI_API_KEY', 'YOUR_GEMINI_API_KEY_HERE');
define('GEMINI_API_URL', 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent');

// Site Configuration
define('SITE_NAME', 'Spica');
define('SITE_URL', 'http://localhost');
define('UPLOAD_DIR', __DIR__ . '/uploads/');

// Session Configuration
session_start();
if (!isset($_SESSION['user_id'])) {
    $_SESSION['user_id'] = 1; // Default user for demo
}

// Database Connection
try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8',
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    die('Database Connection Error: ' . $e->getMessage());
}

// Helper Functions
function sanitize($input) {
    return htmlspecialchars(strip_tags($input), ENT_QUOTES, 'UTF-8');
}

function getUserId() {
    return $_SESSION['user_id'] ?? 1;
}
?>