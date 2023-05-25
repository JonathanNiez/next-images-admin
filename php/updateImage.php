<?php
require 'connect.php';
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $error = mysqli_error($conn);

  $ImageID = $data["imageID"];
  $ImageName = $data["imageName"];

  $DeleteImageSQL =
    "UPDATE images SET imageName = '$ImageName' WHERE imageID = '$ImageID'";
  $DeleteImageQuery = mysqli_query($conn, $DeleteImageSQL);

  if ($DeleteImageQuery) {
    http_response_code(201);

    echo "Image Updated Successfully \n" . $DeleteImageQuery;
  } else {
    http_response_code(422);

    echo "Image Failed to Update \n" . $error;
  }
}
