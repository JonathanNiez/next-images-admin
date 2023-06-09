<?php
require 'connect.php';
header("Access-Control-Allow-Origin *");
header('Content-type: application/json');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $error = mysqli_error($conn);

  $ImageID = $data["imageID"];

  $DeleteImageSQL =
    "DELETE FROM images WHERE imageID = '$ImageID'";
  $DeleteImageQuery = mysqli_query($conn, $DeleteImageSQL);

  if ($DeleteImageQuery) {
    http_response_code(201);

    echo "Image Deleted Successfully \n" . $DeleteImageQuery;
  } else {
    http_response_code(422);

    echo "Image Failed to Delete \n" . $error;
  }
}
