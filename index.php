<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'bazinga010100@gmail.com'; // Замените на свой email

    $subject = 'New Email from ' . $name;
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    echo 'Email sent successfully!';
} else {
    echo 'Invalid request.';
}
?>
