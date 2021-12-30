<?php


if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "contact@santadeoliveira.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from " .$name. ".\n\n".$message;



    mail($mailTo, $tel, $txt, $headers);

    header("Location: homepage.html?mailsent");

}




 
