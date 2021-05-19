<?php
require 'connexion.php';

if(isset($postData)){
    $data = json_decode($postData);
    $conn = $bdd->prepare('select * from activites where location = :loc');
    $conn->execute(array(
      'loc' => $data->data->ville
    ));
    $result = $conn->fetchAll();
    echo json_encode($result);
}