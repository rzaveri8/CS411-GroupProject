<?php
require_once("/setup.php");
require_once($dir . "/controllers/get-auth-code.php");
?>

<html>
<body>
  <p> <?php echo $message; ?> </p>
  <?php if($isAuthorized): ?>
  <a href="<?php echo $linkedInAuthUrl; ?>"> Authorize LinkedIn </a>
<?php endif ?>
</body>
</html>
