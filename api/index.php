<?php
// index.php

// Display all errors for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Handle incoming request
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Simple router example
switch ($requestUri) {
    case '/':
        echo json_encode([
            'status' => 'success',
            'message' => 'Welcome to Vercel PHP deployment!'
        ]);
        break;
    case '/hello':
        echo json_encode([
            'status' => 'success',
            'message' => 'Hello, world!'
        ]);
        break;
    default:
        http_response_code(404);
        echo json_encode([
            'status' => 'error',
            'message' => 'Not Found'
        ]);
        break;
}

// Optionally, you can include more complex routing and handling logic here

?>
