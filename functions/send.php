<?php
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);

$message = "Name: " . $name . "\r\nEmail Address: " . $email . "\r\n\n" . $message;

$to = "danielpichardo716@gmail.com";
$subject = "New Contact Request";

if(mail($to, $subject, $message)) {
	echo 0;
} else {
	echo 1;
}

?>