<?php
require_once("../setup.php");
require_once($dir . '/request-params.php');

$linkedInAuthUrl = "https://www.linkedin.com/oauth/v2/authorization?" . $auth_params["response"] . $auth_params["client_id"] . $auth_params["redirect_uri"] . $auth_params["random_string"];

$userCode = "";
$message = "";
$isAuthorized = true;

if(!isset($_COOKIE['linkedInAuthCode'])){ //if we don't have a cookie saved, then the user must have just authorized LinkedIn, or needs to do so
  $userCode = $_GET['code'];
  if(!is_null($userCode) && $userCode != ""){
    setcookie("linkedInAuthCode", $userCode);
    $message = "Your LinkedIn authorization code has been saved.";
  }
  else{
    $isAuthorized = false;
    $message = "Please authorize on LinkedIn using the link below";
  };
}
else{ //else the user is already authorized;
  $message = "You have already been authorized on LinkedIn";
}
?>
