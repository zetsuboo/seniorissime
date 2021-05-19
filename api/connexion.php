<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$bdd = new PDO('mysql:host=localhost;dbname=seniorissime', 'root', '');


$postData = file_get_contents('php://input');