 <?php
 error_reporting(-1); 
 ini_set('display_errors', 'On');
 if(isset($_POST['submit-btn'])){

    $to_email = $_POST['toEmail'];
    $subject = $_POST['subject'];
    $body = $_POST['message'];
    // $headers = "From: coderykdromar@outlook.com";
    $response=mail($to_email, $subject, $body);
    if (isset($response)) {
        echo "Email successfully sent to $to_email...";
        // echo isset($response);
        
    } else {
        echo "Email sending failed...";
    } 

 }


// phpInfo();
?>
