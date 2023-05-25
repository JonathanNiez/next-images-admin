<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "ws101";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
$data = json_decode(file_get_contents('php://input'), true);


if (!$conn) {
    die("Connection Failed" . mysqli_connect_error());
}
