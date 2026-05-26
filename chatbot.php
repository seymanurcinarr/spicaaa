<?php
// Spica Game AI Hub - Chatbot API
// Gemini API Integration

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';

// Get user message
$input = json_decode(file_get_contents('php://input'), true);
$userMessage = isset($input['message']) ? sanitize($input['message']) : '';
$userId = getUserId();

if (empty($userMessage)) {
    http_response_code(400);
    die(json_encode(['error' => 'Message is required']));
}

// Build Gemini API request
$prompt = buildPrompt($userMessage);

try {
    // Call Gemini API
    $response = callGeminiAPI($prompt);
    $aiResponse = extractAIResponse($response);

    // Save to database
    saveChat($pdo, $userId, $userMessage, $aiResponse);

    echo json_encode([
        'success' => true,
        'message' => $aiResponse,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

/**
 * Build prompt for Gemini API
 */
function buildPrompt($userMessage) {
    global $pdo;

    // Get user's liked games for context
    $likedGames = getLikedGames($pdo, getUserId());
    $gamesContext = !empty($likedGames) ? "User likes: " . implode(", ", $likedGames) : "";

    $prompt = "You are Spica, an AI gaming assistant for a game recommendation platform. Help users with:\n\n";
    $prompt .= "1. Game recommendations based on their preferences\n";
    $prompt .= "2. Information about where games are available (Steam, Epic Games Store, PlayStation Store, Xbox Store)\n";
    $prompt .= "3. Game prices and where to find the cheapest deals\n";
    $prompt .= "4. Platform compatibility advice\n";
    $prompt .= "5. GPU/System requirements analysis\n\n";
    $prompt .= "Context: " . $gamesContext . "\n\n";
    $prompt .= "User message: " . $userMessage . "\n\n";
    $prompt .= "Provide a helpful, friendly response in Turkish. Keep responses concise and actionable.";

    return $prompt;
}

/**
 * Call Gemini API
 */
function callGeminiAPI($prompt) {
    $apiKey = GEMINI_API_KEY;
    $url = GEMINI_API_URL . '?key=' . $apiKey;

    if ($apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
        throw new Exception('Gemini API Key not configured. Please set GEMINI_API_KEY in config.php');
    }

    $data = [
        'contents' => [
            [
                'parts' => [
                    ['text' => $prompt]
                ]
            ]
        ]
    ];

    $options = [
        'http' => [
            'method' => 'POST',
            'header' => ['Content-Type: application/json'],
            'content' => json_encode($data),
            'timeout' => 30
        ]
    ];

    $context = stream_context_create($options);
    $response = @file_get_contents($url, false, $context);

    if ($response === false) {
        throw new Exception('Failed to call Gemini API');
    }

    return json_decode($response, true);
}

/**
 * Extract AI response from Gemini API
 */
function extractAIResponse($response) {
    if (isset($response['candidates'][0]['content']['parts'][0]['text'])) {
        return $response['candidates'][0]['content']['parts'][0]['text'];
    }
    return 'Unable to process your request. Please try again.';
}

/**
 * Get user's liked games
 */
function getLikedGames($pdo, $userId) {
    $stmt = $pdo->prepare('SELECT g.name FROM user_liked_games ul JOIN games g ON ul.game_id = g.id WHERE ul.user_id = ? AND ul.liked = TRUE');
    $stmt->execute([$userId]);
    $games = $stmt->fetchAll();
    return array_column($games, 'name');
}

/**
 * Save chat to database
 */
function saveChat($pdo, $userId, $userMessage, $aiResponse) {
    $stmt = $pdo->prepare('INSERT INTO chat_history (user_id, user_message, ai_response) VALUES (?, ?, ?)');
    $stmt->execute([$userId, $userMessage, $aiResponse]);
}
?>