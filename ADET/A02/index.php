<?php

include("shared/biome-data.php");
include("shared/structures-data.php");
include("shared/caves-data.php");

$page = "biomes";
$subPage = isset($_GET['tab']) ? $_GET['tab'] : "0";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "biomes":
            $page = "biomes";
            break;
        case "structures":
            $page = "structures";
            break;
        case "caves":
            $page = "caves";
            break;
        default:
            header("Location: ?page=biomes&subPage=0");
            break;
    }
} else {
    header("Location: ?page=biomes&subPage=0");
}


?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Minecraft: Explore</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet">
    <link rel="icon" href="assets/img/mce-fav.png" type="image/x-icon">
    <link rel="stylesheet" href="assets/font/font.css">
    <link rel="stylesheet" href="assets/style.css">

</head>

<body>
    <div class="navbar">
        <img src="assets/img/mce-logo.png" alt="minecraft explore logo" class="img-fluid ">
    </div>

    <!-- EXPLORATION TABS -->
    <form>
        <div class="tab-container">
            <input type="radio" id="biomes" name="page" value="biomes" <?php echo $page == "biomes" ? "checked" : "" ?>
                onchange="this.form.submit()">
            <label for="biomes" class="tab">BIOMES</label>
            <input type="radio" id="structures" name="page" value="structures" <?php echo $page == "structures" ? "checked" : "" ?> onchange="this.form.submit()">
            <label for="structures" class="tab">STRUCTURES</label>
            <input type="radio" id="caves" name="page" value="caves" <?php echo $page == "caves" ? "checked" : "" ?>
                onchange="this.form.submit()">
            <label for="caves" class="tab">CAVES</label>
        </div>
    </form>

    <!-- CONTAINER -->
    <?php include("pages/" . $page . ".php"); ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous">
        </script>

</body>

</html>