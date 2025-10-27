<?php
// Allow POST only
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $message = $_POST["message"] ?? '';

    // Sanitize
    $name = htmlspecialchars(trim($name));
    $email = htmlspecialchars(trim($email));
    $message = htmlspecialchars(trim($message));

    // Recipient email (change this to your email)
    $to = "bharathteamworks@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Mail sent successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Mail failed to send."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request."]);
}
?>
