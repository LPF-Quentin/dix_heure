<?php
require './php/PHPMailer/class.phpmailer.php';

$mail = new PHPMailer;

$mail->From 	= $_POST['email'];
$mail->FromName = $_POST['nom'];
$mail->addAddress('contact@copieconforme91.fr');      // Name is optional
$mail->addReplyTo($_POST['email'], $_POST['nom']);

$mail->isHTML(true);                                  // Set email format to HTML

if( $_FILES['doc']['size'] > 0 )
	$mail->addAttachment( $_FILES['doc']['tmp_name'], $_FILES['doc']['name'] );         // Add attachments

$mail->Subject = 'Message depuis le site copieconforme91.fr';
$mail->Body    = '<p>'.htmlentities($_POST['nom']).' (tél : '.htmlentities($_POST['tel']).') vous envoie un message :</p><p>'.htmlentities($_POST['message']).'</p>';

if(!$mail->send()) {
    echo 'Votre message n\' pas pu être envoyé, nous sommes désolé, envoyer nous un email à contact@copieconforme91.fr';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {	
	$mail = new PHPMailer;
	
	$mail->From 	= 'contact@copieconforme91.fr';
	$mail->FromName = 'Copie Conforme';
	$mail->addAddress( $_POST['email'] );      // Name is optional
	//$mail->addAddress('contact@copieconforme91.fr');      // Name is optional
	$mail->addReplyTo('contact@copieconforme91.fr', 'Copie Conforme');
	
	$mail->isHTML(true);                                  // Set email format to HTML
	
	$mail->Subject = 'Votre message depuis le site copieconforme91.fr';
	//$mail->Body    = '<p>Bonjour '.htmlentities($_POST['nom']).',<br />Nous avons bien reçu votre message déposé sur le site copieconforme91.fr, nous reviendrons vers vous le plus rapidement possible.<br />Cordialement,<br />Stéphane</p>';
	$mail->Body    = '<p>Bonjour,</p><p>Nous confirmons la réception de votre message.<br />Celui-ci sera traité dans les plus brefs délais.</p><p>Cordialement,<br />Stéphane Lupano</p><p style="font-style:italic;">Ce message est un message automatique, merci de ne pas y répondre directement.</p>';
	$mail->send();
	
    header('Location: http://www.copieconforme91.fr');
}

?>