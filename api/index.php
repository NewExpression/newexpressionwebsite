<?php

require 'Slim/Slim.php';



Slim\Slim::registerAutoloader();

$app = new Slim\Slim();

$app->post("/quote", function () {
  $body = $app->request->getBody();
});

$app->run();