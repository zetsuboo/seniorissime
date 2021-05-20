<?php
require 'connexion.php';

if(isset($postData)){
  $data = json_decode($postData);
  if(isset($data->data->type)){
    $conn = $bdd->prepare('SELECT * FROM activites WHERE location = :loc AND categorie = :cat');
    $conn->execute(array(
      'loc' => $data->data->ville,
      'cat' => $data->data->type
    ));
    $result = $conn->fetchAll();
    
  } else {
    $conn = $bdd->prepare('select * from activites where location = :loc');
    $conn->execute(array(
      'loc' => $data->data->ville
    ));
    $result = $conn->fetchAll();
  }
  if(!$result){
    echo json_encode($result);
  } else {
    echo json_encode($result);
    
  }
  
}