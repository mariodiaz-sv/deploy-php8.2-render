<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$filename = 'datos.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['nombre']) || !isset($data['promedio'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Datos incompletos']);
        exit;
    }

    $nuevoDato = [
        'nombre' => htmlspecialchars($data['nombre']),
        'promedio' => htmlspecialchars($data['promedio'])
    ];

    if (file_exists($filename)) {
        $contenido = json_decode(file_get_contents($filename), true);
        if (!is_array($contenido)) $contenido = [];
    } else {
        $contenido = [];
    }

    $contenido[] = $nuevoDato;
    file_put_contents($filename, json_encode($contenido, JSON_PRETTY_PRINT));

    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($filename)) {
        echo file_get_contents($filename);
    } else {
        echo json_encode([]);
    }
    exit;
}
?>
