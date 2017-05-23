<?php
header('Content-type: application/json');

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = "From: $name"; 
$to = "jack.freiermuth@gmail.com"; 
$subject = "Jackfry.net Contact Form!";
// $human = $_POST['human'];

$body = "From: $name\nE-Mail: $email\nMessage:\n$message";

// if ($_POST['submit']/* && $human == '4'*/) {				 
	if ('localhost' == $_SERVER['HTTP_HOST'] || mail ($to, $subject, $body, $from)) { 
		$response_array['status'] = 'success';
	} else { 
		$response_array['status'] = 'error'; 
	} 

	echo json_encode($response_array);
// } else if ($_POST['submit'] && $human != '4') {
	// echo '<p>You answered the anti-spam question incorrectly!</p>';
// }
