<?php

$structures = [
    [
        "id" => "0",
        "name" => "Village",
        "displayPicture" => "village.jpg",
        "biome" => ["Plains", "Desert", "Savanna", "Taiga", "Snowy Tundra"],
        "dimension" => "Overworld",
        "description" => "Villages are populated structures with buildings and villagers. Great for trading and shelter.",
        "features" => ["Houses", "Farms", "Iron Golem", "Bell"],
        "mobs" => ["Villagers", "Iron Golem", "Cats", "Zombies (at night)"],
        "rarity" => "Common"
    ],
    [
        "id" => "1",
        "name" => "Pillager Outpost",
        "displayPicture" => "pillager-outpost.png",
        "biome" => ["Plains", "Desert", "Savanna", "Taiga", "Snowy Tundra"],
        "dimension" => "Overworld",
        "description" => "Tall wooden towers inhabited by pillagers, often near villages.",
        "features" => ["Watchtower", "Pillagers", "Loot Chest", "Cage"],
        "mobs" => ["Pillagers", "Iron Golem (in cage)", "Allay (in cage)"],
        "rarity" => "Uncommon"
    ],
    [
        "id" => "2",
        "name" => "Woodland Mansion",
        "displayPicture" => "woodland-mansion.png",
        "biome" => ["Dark Forest"],
        "dimension" => "Overworld",
        "description" => "Massive, rare structures filled with hostile mobs like evokers and vindicators.",
        "features" => ["Multiple rooms", "Hidden loot", "Hostile mobs"],
        "mobs" => ["Evokers", "Vindicators", "Allays (in jail rooms)", "Cats"],
        "rarity" => "Rare"
    ],
    [
        "id" => "3",
        "name" => "Ocean Monument",
        "displayPicture" => "ocean-monument.png",
        "biome" => ["Deep Ocean"],
        "dimension" => "Overworld",
        "description" => "Large underwater temples guarded by guardians and elder guardians.",
        "features" => ["Prismarine blocks", "Sea lanterns", "Sponges"],
        "mobs" => ["Guardians", "Elder Guardians"],
        "rarity" => "Rare"
    ],
    [
        "id" => "4",
        "name" => "Desert Pyramid",
        "displayPicture" => "desert-pyramid.png",
        "biome" => ["Desert"],
        "dimension" => "Overworld",
        "description" => "Temples with hidden TNT traps and valuable loot inside.",
        "features" => ["Hidden chest room", "TNT trap", "Decorative sandstone"],
        "mobs" => ["None (naturally)", "Husks (around at night)"],
        "rarity" => "Uncommon"
    ],
    [
        "id" => "5",
        "name" => "Jungle Temple",
        "displayPicture" => "jungle-temple.png",
        "biome" => ["Jungle"],
        "dimension" => "Overworld",
        "description" => "Small stone temples with traps and hidden chests.",
        "features" => ["Tripwire traps", "Secret lever puzzle", "Loot"],
        "mobs" => ["None (naturally)", "Ocelots (around temple)", "Zombies (at night)"],
        "rarity" => "Uncommon"
    ],
    [
        "id" => "6",
        "name" => "Bastion Remnant",
        "displayPicture" => "bastion-remnant.png",
        "biome" => ["Nether Wastes", "Crimson Forest", "Basalt Deltas"],
        "dimension" => "Nether",
        "description" => "Large ruined fortresses found in the Nether, heavily guarded by piglins and brutes. They contain valuable loot and blocks.",
        "features" => ["Treasure room", "Piglin housing", "Gold blocks"],
        "mobs" => ["Piglins", "Piglin Brutes", "Hoglins", "Magma Cubes"],
        "rarity" => "Uncommon"
    ],
    [
        "id" => "7",
        "name" => "Ruined Portal",
        "displayPicture" => "ruined-portal.png",
        "biome" => ["All biomes"],
        "dimension" => "Overworld, Nether",
        "description" => "Partially built nether portals with netherrack and loot chests. Can generate in almost any biome.",
        "features" => ["Crying obsidian", "Loot chest", "Fire"],
        "mobs" => ["None (naturally)"],
        "rarity" => "Common"
    ],
    [
        "id" => "8",
        "name" => "Ancient City",
        "displayPicture" => "ancient-city.png",
        "biome" => ["Deep Dark"],
        "dimension" => "Overworld",
        "description" => "Huge underground ruins home to mysterious redstone tech and guarded by the fearsome Warden.",
        "features" => ["Reinforced deepslate", "Redstone rooms", "Loot chests"],
        "mobs" => ["Warden", "Sculk Sensors (trigger)"],
        "rarity" => "Very Rare"
    ],
    [
        "id" => "9",
        "name" => "Stronghold",
        "displayPicture" => "stronghold.png",
        "biome" => ["Underground (any biome)"],
        "dimension" => "Overworld",
        "description" => "Hidden underground structures containing the End Portal. Critical for progressing to The End.",
        "features" => ["End Portal room", "Libraries", "Silverfish spawner"],
        "mobs" => ["Silverfish"],
        "rarity" => "Rare"
    ],
    [
        "id" => "10",
        "name" => "End City",
        "displayPicture" => "end-city.jpg",
        "biome" => ["End Highlands"],
        "dimension" => "The End",
        "description" => "Tall structures in the outer End islands that contain valuable loot and sometimes an End Ship with Elytra.",
        "features" => ["Chorus plants", "Purpur blocks", "End Ship", "Elytra"],
        "mobs" => ["Shulkers"],
        "rarity" => "Uncommon"
    ]
];
?>