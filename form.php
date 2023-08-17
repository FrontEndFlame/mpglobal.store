<?php
    require 'PHPMailer/src/SMTP.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/Exception.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    
    $mail = new PHPMailer();
    $mail->CharSet = 'utf-8';
    
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact.mpglobal@gmail.com';
    $mail->Password = 'rinxczujsrzzgyje';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    
    
    $mail->setFrom('contact.mpglobal@gmail.com');
    $mail->addReplyTo('contact.mpglobal@gmail.com');
    $mail->addAddress('contact.mpglobal@gmail.com');
    $mail->isHTML(true);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(isset($_POST['phone']) && isset($_POST['options'])){
            $to = "contact.mpglobal@gmail.com";
            $phone = $_POST['phone'];
            $phone = htmlspecialchars($_POST['phone']);
            $phone = urldecode($_POST['phone']);
            $phone = trim($_POST['phone']);
            
            $options = $_POST['options'];
            $options = htmlspecialchars($_POST['options']);
            $options = urldecode($_POST['options']);
            $options = trim($_POST['options']);
            
            if($_POST['options'] == 1) {
                $options = 'позвоните Мне';
            } elseif($_POST['options'] == 2) {
                $options = 'напишите в Telegram';
            } elseif($_POST['options'] == 3) {
                $options = 'напишите в WhatsApp';
            } else {
                $options = 'позвоните Мне';
            }
        } else {
           $phone = "";
        }
    }
    
    $mail->Subject = 'Новая заявка с сайта!';
    $mail->Body    = 'Здравствуйте, ' .$options. ' на мой номер: ' .$phone . "\r\n";
    $mail->AltBody = '';
    
    // $headers = "From: $from" . "\r\n" .
    // "Reply-To: $from" . "\r\n" .
    // "X-Mailer: PHP/" . phpversion();
    
    $mail->send();
    
    header('Location: success.php');
    exit;

?>