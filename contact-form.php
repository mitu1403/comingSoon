<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'mitu@targetscope.com.bd';

  $email_subject = "Got a New Query for you!!";

  $email_body = "User Name: $name.\n"."User Email: $visitor_email\n"."User Message: \n$message.\n";

  $to = "info@targetscope.com.bd";

  $headers = "Form: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  header("Location: index.html");

?>