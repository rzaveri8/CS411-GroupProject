<?php

$dir = __DIR__;
require_once($dir . '/request-params.php');

$code = $_GET['code']; //the users access code, granted after they authorize the app to access their account

$requestData = array(
  "client_id" => $auth_params["client_id"],
  "client_secret" => $auth_params["client_secret"],
  "grant_type" => $auth_params["grant_type"],
  "redirect_uri" => $auth_params["redirect_uri"],
  "code" => $code
)
if(!is_null($code)){
  $linkedInAccessTokenUrl = "https://www.linkedin.com/oauth/v2/accessToken?";

  $encodedRequestData = http_build_query($requestData);

  $requestParameters = array(
    'http' => array(
      'method' => 'POST',
      'header' => 'Content-type:application/x-www-form-urlencoded',
      'content' => $encodedRequestData
    )
  );

  $stream = stream_context_create($requestParameters);

  $response = file_get_contents($linkedInAccessTokenUrl, false, $stream);

  echo $response;

}
else{
  echo "Could not get access code";
}
//TODO: put code onto AWS and try to get access code for this callback url
 ?>
