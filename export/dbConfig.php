<?php 
// Database configuration 
$dbHost     = "localhost"; 
$dbUsername = "grzexpre_root"; 
$dbPassword = 'nC$4VNIy$gYH'; 
$dbName     = "grzexpre_grzexpressdb"; 
 
// Create database connection 
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName); 
 mysqli_set_charset($db,'utf8');
// Check connection 
if ($db->connect_error) { 
    die("Connection failed: " . $db->connect_error); 
}
?>

// <?php
// $servername = "localhost";
// $username = "grzexpre_root";
// $password = "nC$4VNIy$gYH";

// // Create connection
// $conn = mysqli_connect($servername, $username, $password);

// // Check connection
// if (!$conn) {
//   die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected successfully";
// ?>

// <?php
// $servername = "localhost";
// $username = "grzexpre_root";
// $password = 'nC$4VNIy$gYH';

// try {
//   $conn = new PDO("mysql:host=$servername;dbname=grzexpre_grzexpressdb", $username, $password);
//   // set the PDO error mode to exception
//   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//   echo "Connected successfully";
// } catch(PDOException $e) {
//   echo "Connection failed: " . $e->getMessage();
// }
// ?>