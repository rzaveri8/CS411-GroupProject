<?php

$dir = __DIR__;
require_once($dir . '/request-params.php');

$linkedInAuthUrl = "https://www.linkedin.com/oauth/v2/authorization?" . $auth_params["response"] . $auth_params["client_id"] . $auth_params["redirect_uri"] . $auth_params["random_string"];
/*
https://www.linkedin.com/oauth/v2/authorization?
response_type=code&
client_id=78cqng6qn9sp48&
redirect_uri=https://www.getpostman.com/oauth2/callback&
state=aRandomString
*/

?>
<html>
<body>
  <a href="<?php echo $linkedInAuthUrl; ?>"> Authorize LinkedIn </a>
</body>
</html>
