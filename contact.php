<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    //Email Validation
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "Invalid email format.";
        exit;
    }

    $timestamp = date("Y-m-d H:i:s");

    $content = "Time: $timestamp\nName: $name\nEmail: $email\nMessage: $message\n";

    //Save message to file
    file_put_contents("message.txt", $content, FILE_APPEND);

    echo "<strong>Thank you, $name!</strong><br>";
    echo "WE have recieved your message <br>";
} else {
    echo "Invalid request. ";
}

?>