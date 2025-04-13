<?php $selectedStructure = $structures[$subPage]; ?>

<form method="GET">
    <input type="hidden" name="page" value="structures">
    <div class="base-container">

        <div class="options-tab">
            <?php foreach ($structures as $structure) { ?>
                <input type="radio" id="<?php echo $structure['id'] ?>" name="tab" value="<?php echo $structure['id'] ?>"
                    <?php echo $subPage == $structure['id'] ? "checked" : "" ?> onchange="this.form.submit()">
                <label for="<?php echo $structure['id'] ?>" class="mc-tab"><?php echo $structure['name'] ?></label>

            <?php } ?>
        </div>

        <div class="main-container">
            <h3><?php echo $selectedStructure['name'] ?></h3>
            <img src="assets/img/<?php echo $selectedStructure['displayPicture']; ?>" class="feat-pic">
            <p class="desc pt-2"><?php echo $selectedStructure['description']; ?></p>
            <ul class="attributes p-0">
                <li>Biome: <span>
                        <?php
                        $biome = $selectedStructure['biome'];
                        $biomeList = implode(", ", $biome);
                        echo $biomeList;
                        ?>
                    </span></li>
                <li>Rarity: <span><?php echo $selectedStructure['rarity']; ?></span></li>
                <li>Features: <span><?php

                $features = $selectedStructure['features'];
                $featureList = implode(", ", $features);
                echo $featureList;
                ?></span></li>
                <li>Mobs: <span>
                        <?php
                        $mobs = $selectedStructure['mobs'];
                        $mobList = implode(", ", $mobs);
                        echo $mobList;
                        ?>
                    </span></li>
            </ul>
        </div>

        <ul class="accordion p-0">
            <?php foreach ($structures as $structure) { ?>
                <li class="acc-item">
                    <input type="radio" name="accordion" id="acc-<?php echo $structure['id'] ?>"
                        value="<?php echo $structure['id'] ?>" <?php echo $subPage == $structure['id'] ? "checked" : "" ?>>
                    <label for="acc-<?php echo $structure['id'] ?>"><?php echo $structure['name'] ?></label>
                    <div class="content">
                        <img src="assets/img/<?php echo $structure['displayPicture'] ?>">
                        <p class="pt-2"><?php echo $structure['description'] ?></p>
                        <ul class="attributes">
                            <li>Biome: <span>
                                    <?php
                                    $biome = $structure['biome'];
                                    $biomeList = implode(", ", $biome);
                                    echo $biomeList;
                                    ?>
                                </span></li>
                            <li>Rarity: <span><?php echo $structure['rarity']; ?></span></li>
                            <li>Dimension: <span><?php echo $structure['dimension']; ?></span></li>
                            <li>Mobs: <span>
                                    <?php
                                    $mobs = $structure['mobs'];
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