<?php $selectedTabIndex = $biomes[$subPage]; ?>
<form method="GET">
    <input type="hidden" name="page" value="biomes">
    <div class="base-container">

        <div class="options-tab">
            <?php foreach ($biomes as $biome) { ?>
                <input type="radio" id="<?php echo $biome['id'] ?>" name="tab" value="<?php echo $biome['id'] ?>" <?php echo $subPage == $biome['id'] ? "checked" : "" ?> onchange="this.form.submit()">
                <label for="<?php echo $biome['id'] ?>" class="mc-tab"><?php echo $biome['name'] ?></label>

            <?php } ?>
        </div>

        <div class="main-container">
            <h3><?php echo $selectedTabIndex['name'] ?></h3>
            <img src="assets/img/<?php echo $selectedTabIndex['displayPicture']; ?>" class="feat-pic">
            <p class="desc pt-2"><?php echo $selectedTabIndex['description']; ?></p>
            <ul class="attributes p-0">
                <li>Category: <span><?php echo $selectedTabIndex['category']; ?></span></li>
                <li>Rarity: <span><?php echo $selectedTabIndex['rarity']; ?></span></li>
                <li>Dimension: <span><?php echo $selectedTabIndex['dimension']; ?></span></li>
                <li>Features: <span><?php
                $features = $selectedTabIndex['features'];
                $featureList = implode(", ", $features);
                echo $featureList;
                ?></span></li>
                <li>Mobs: <span>
                        <?php
                        $mobs = $selectedTabIndex['mobs'];
                        $mobList = implode(", ", $mobs);
                        echo $mobList;
                        ?>
                    </span></li>
            </ul>
        </div>
    </div>
</form>