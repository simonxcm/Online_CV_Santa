<?php

$message_sent = false;

if (isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['subject']) && isset($_POST['message'])) {

    if(filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {

        $name = htmlspecialchars($_POST['name']);
        $mail = htmlspecialchars($_POST['mail']);
        $subject = htmlspecialchars($_POST['subject']);
        $message = htmlspecialchars($_POST['message']);

        $to = "contact@santadeoliveira.com";
        $body = "";

        $body .= "From: ".$name. "\r\n";
        $body .= "Email: ".$mail. "\r\n";
        $body .= "Message: ".$message. "\r\n";

        mail($to, $subject, $body);

        $message_sent = true;

        header("Location:thankyou.php");

        } else {
            $invalid_email = "invalid-email";
            header("Location:homepage.php#form-section");
    }
};
?>