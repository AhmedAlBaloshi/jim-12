<?php 
 
// Load the database configuration file 
include_once 'dbConfig.php'; 
 
// Fetch records from database 
$query = $db->query("SELECT prd.*, comp.* FROM products AS prd LEFT JOIN companies AS comp ON prd.product_company = comp.company_id ORDER BY prd.product_company"); 
 
if($query->num_rows > 0){ 
    $delimiter = ","; 
    $filename = "members-data_" . date('Y-m-d') . ".csv"; 
     
    // Create a file pointer 
    $f = fopen('php://memory', 'w'); 
     fputs($fp, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));
    // Set column headers 
    $fields = array('store name', 'storeId', 'cid', 'cover', 'price', 'rating', 'veg', 'name_en', 'name_ar', 'variations', 'size', 'status'); 
    fputcsv($f, $fields, $delimiter); 
     
    
    // Output each row of the data, format line as csv and write to file pointer 
    while($row = $query->fetch_assoc()){
        $lineData = array($row['company_name'], $row['product_company'], 0, $row['product_image'], $row['product_price'], 0, 1, $row['product_title'], $row['product_title_ar'], [], 0, 1); 
        fputcsv($f, $lineData, $delimiter); 
    } 
     
    // Move back to beginning of file 
    fseek($f, 0); 
     
    // Set headers to download file rather than displayed 
    header('Content-Type: text/csv; charset=utf-8'); 
    header('Content-Disposition: attachment; filename="' . $filename . '";'); 
     
     mb_convert_encoding($fp, 'UTF-16LE', 'UTF-8');
     
    //output all remaining data on a file pointer 
    fpassthru($f); 
    
    
    // get Users
    // $query = "SELECT prd.*, comp.* FROM products AS prd LEFT JOIN companies AS comp ON prd.product_company = comp.company_id ORDER BY prd.product_company";
    // if (!$result = mysqli_query($con, $query)) {
    //     exit(mysqli_error($con));
    // }
    
    // $users = array();
    // if (mysqli_num_rows($result) > 0) {
    //     while ($row = mysqli_fetch_assoc($result)) {
    //         $users[] = $row;
    //     }
    // }
    
    // header('Content-Type: text/csv; charset=utf-8');
    // header('Content-Disposition: attachment; filename=Users.csv');
    // $output = fopen('php://output', 'w');
    // fputcsv($output, array('No', 'First Name', 'Last Name', 'Email'));
    
    // if (count($users) > 0) {
    //     foreach ($users as $row) {
    //         fputcsv($output, $row);
    //     }
    // }
}
else{
    echo "no way";
}
exit; 
 
?>