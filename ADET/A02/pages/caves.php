<?php $selectedCave = $caves[$subPage]; ?>
<form method="GET">
    <input type="hidden" name="page" value="caves">
    <div class="base-container">

        <div class="options-tab">
            <?php foreach ($caves as $cave) { ?>
                <input type="radio" id="<?php echo $cave['id'] ?>" name="tab" value="<?php echo $cave['id'] ?>" <?php echo $subPage == $cave['id'] ? "checked" : "" ?> onchange="this.form.submit()">
                <label for="<?php echo $cave['id'] ?>" class="mc-tab"><?php echo $cave['name'] ?></label>

            <?php } ?>
        </div>

        <div class="main-container">
            <h3><?php echo $selectedCave['name'] ?></h3>
            <img src="assets/img/<?php echo $selectedCave['displayPicture']; ?>" class="feat-pic">
            <p class="desc pt-2"><?php echo $selectedCave['description']; ?></p>
            <ul class="attributes p-0">
                <li>Category: <span><?php echo $selectedCave['category']; ?></span></li>
                <li>Rarity: <span><?php echo $selectedCave['rarity']; ?></span></li>
                <li>Dimension: <span><?php echo $selectedCave['dimension']; ?></span></li>
                <li>Features: <span><?php
                $features = $selectedCave['features'];
                $featureList = implode(", ", $features);
                echo $featureList;
                ?></span></li>
                <li>Mobs: <span>
                        <?php
                        $mobs = $selectedCave['mobs'];
                        $mobList = implode(", ", $mobs);
                        echo $mobList;
                        ?>
                    </span></li>
            </ul>
        </div>

        <ul class="accordion p-0">
            <?php foreach ($caves as $cave) { ?>
                <li class="acc-item">
                    <input type="radio" name="accordion" id="acc-<?php echo $cave['id'] ?>"
                        value="<?php echo $cave['id'] ?>" <?php echo $subPage == $cave['id'] ? "checked" : "" ?>>
                    <label for="acc-<?php echo $cave['id'] ?>"><?php echo $cave['name'] ?></label>
                    <div class="content">
                        <img src="assets/img/<?php echo $cave['displayPicture'] ?>">
                        <p class="pt-2"><?php echo $cave['description'] ?></p>
                        <ul class="attributes">
                            <li>Category: <span><?php echo $cave['category']; ?></span></li>
                            <li>Rarity: <span><?php echo $cave['rarity']; ?></span></li>
                            <li>Dimension: <span><?php echo $cave['dimension']; ?></span></li>
                            <li>Mobs: <span>
                                    <?php
                                    $mobs = $cave['mobs'];
                                    $mobList = implode(", ", $mobs);
                                    echo $mobList;
                                    ?>
                                </span></li>
                        </ul>
                    </div>
                </li>
            <?php } ?>
        </ul>
    </div>
</form>