<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Css Layout</title>
</head>
<body>
<?php 
require_once('includes/form-grid.php');
require_once('includes/form-cell.php');
?>

    <header id="MainHeader">
        <h1>Ingrid! <small>Un outil pour mieux comprendre CSS Grid</small></h1>
        <a class="settings">
            <img src="assets/img/settings.png"/>
        </a>
    </header>
    
    <?php include('includes/grid.php'); ?>

    <div id="Help">
        
        <div class="bubble">
            <h2>Inspecter la grille</h2>
            <p>Avec l'inspecteur de chrome, aller dans l'arborescence et cliquer sur "grid"</p>
            <img src="assets/img/inspecteur.jpg"/>
        </div>
        
    </div>
    
    <script src="assets/js/grid.js"></script>
    <script src="assets/js/cell.js"></script>
</body>
</html>