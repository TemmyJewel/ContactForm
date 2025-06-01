<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "<strong>Thank you, $name!</strong><br>";
    echo "WE have recieved your message, thank you <br>";
} else {
    echo "Invalid request. ";
}


?>