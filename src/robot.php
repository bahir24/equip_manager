<!-- <?php
require 'PHPMailer/PHPMailerAutoload.php';
$json=file_get_contents('php://input');
$data=json_decode($json,true);

$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.beget.com';
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->Username = 'info@nvln.net';
$mail->Password = 'gmW7g4PPr14D';

// От кого
$mail->setFrom('info@nvln.net');        

// Кому
$mail->addAddress('info@nvln.net');

$mail->isHTML(true);
//Тема письма (добавить "Заявка №счетчик")
$mail->Subject = "test2";

$tmp = "Email: " . $data['email'];
$tmp .= "<br>";
$tmp .= "Имя: " . $data['name'];
$tmp .= "<br>";
$tmp .= "Телефон: " . $data['tel'];
$tmp .= "<br>";
$tmp .= "Услуга: " . $data['service'];
$mail->Body    = $tmp;

$mail->send();
//Проверка отправки в консоли
echo 'Message has been sent';
?> -->