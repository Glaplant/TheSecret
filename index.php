<?php
// index.php

// Get the requested page from the URL
$requestedPage = isset($_GET['page']) ? $_GET['page'] : 'home';

// Define available routes
$validRoutes = ['home', 'image-one', 'image-two','image-three','image-four','image-five','image-six','image-seven','image-eight','image-nine','image-ten','image-eleven','image-twelve'];

// Check if the requested page is valid
if (in_array($requestedPage, $validRoutes)) {
    // Include the corresponding page
    include('views/' . $requestedPage . '.php');
    include('views/images/' . $requestedPage . '.php');
    include('views/verses/' . $requestedPage . '.php');
} else {
    // Handle invalid page requests (e.g., show a 404 page)
    echo '404 Not Found';
}
?>