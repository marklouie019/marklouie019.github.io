const products = [
    {
        "category": "coffee",
        "contents": [
            {
                "isAvailable": true,
                "name": "Espresso",
                "displayIcon": "espresso.png",
                "code": "ESP",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 190 },
                    { "name": "Grande", "code": "G", "price": 239 },
                    { "name": "Venti", "code": "V", "price": 249 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Americano",
                "displayIcon": "americano.png",
                "code": "AMR",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 160 },
                    { "name": "Grande", "code": "G", "price": 199 },
                    { "name": "Venti", "code": "V", "price": 209 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cappuccino",
                "displayIcon": "cappuccino.png",
                "code": "CAP",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 180 },
                    { "name": "Grande", "code": "G", "price": 229 },
                    { "name": "Venti", "code": "V", "price": 239 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Latte",
                "displayIcon": "latte.png",
                "code": "LAT",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 185 },
                    { "name": "Grande", "code": "G", "price": 235 },
                    { "name": "Venti", "code": "V", "price": 245 }
                ]
            }, {
                "isAvailable": true,
                "name": "Mocha",
                "displayIcon": "mocha.png",
                "code": "MOCH",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 195 },
                    { "name": "Grande", "code": "G", "price": 245 },
                    { "name": "Venti", "code": "V", "price": 255 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Flat White",
                "displayIcon": "flat-white.png",
                "code": "FLAT",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 190 },
                    { "name": "Grande", "code": "G", "price": 235 },
                    { "name": "Venti", "code": "V", "price": 245 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cold Brew",
                "displayIcon": "cold-brew.png",
                "code": "CLDBRW",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 185 },
                    { "name": "Grande", "code": "G", "price": 225 },
                    { "name": "Venti", "code": "V", "price": 235 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Macchiato",
                "displayIcon": "macchiato.png",
                "code": "MACC",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 190 },
                    { "name": "Grande", "code": "G", "price": 239 },
                    { "name": "Venti", "code": "V", "price": 249 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Iced Coffee",
                "displayIcon": "iced-coffee.png",
                "code": "ICED",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 175 },
                    { "name": "Grande", "code": "G", "price": 220 },
                    { "name": "Venti", "code": "V", "price": 230 }
                ]
            }

        ]
    },
    {
        "category": "tea",
        "contents": [
            {
                "isAvailable": true,
                "name": "Green Tea",
                "displayIcon": "green-tea.png",
                "code": "GRN-TEA",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 170 },
                    { "name": "Grande", "code": "G", "price": 219 },
                    { "name": "Venti", "code": "V", "price": 229 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Earl Grey",
                "displayIcon": "earl-grey.png",
                "code": "EARL",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 165 },
                    { "name": "Grande", "code": "G", "price": 215 },
                    { "name": "Venti", "code": "V", "price": 225 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Chai Tea Latte",
                "displayIcon": "chai-tea-latte.png",
                "code": "CHAI",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 180 },
                    { "name": "Grande", "code": "G", "price": 229 },
                    { "name": "Venti", "code": "V", "price": 239 }
                ]
            },
            {
                "isAvailable": true,
                "name": "English Breakfast",
                "displayIcon": "english-breakfast.png",
                "code": "ENG-BRK",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 165 },
                    { "name": "Grande", "code": "G", "price": 215 },
                    { "name": "Venti", "code": "V", "price": 225 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Hibiscus Tea",
                "displayIcon": "hibiscus-tea.png",
                "code": "HIBI",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 175 },
                    { "name": "Grande", "code": "G", "price": 220 },
                    { "name": "Venti", "code": "V", "price": 230 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Jasmine Tea",
                "displayIcon": "jasmine-tea.png",
                "code": "JASM",
                "sizes": [
                    { "name": "Tall", "code": "T", "price": 170 },
                    { "name": "Grande", "code": "G", "price": 219 },
                    { "name": "Venti", "code": "V", "price": 229 }
                ]
            }

        ]
    },
    {
        "category": "pastries",
        "contents": [
            {
                "isAvailable": true,
                "name": "Croissant",
                "displayIcon": "croissant.png",
                "code": "CROI",
                "sizes": [
                    { "name": "Regular", "code": "R", "price": 95 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Chocolate Muffin",
                "displayIcon": "chocolate-muffin.png",
                "code": "CHOC-MUF",
                "sizes": [
                    { "name": "Regular", "code": "R", "price": 105 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cinnamon Roll",
                "displayIcon": "cinnamon-roll.png",
                "code": "CIN-RLL",
                "sizes": [
                    { "name": "Regular", "code": "R", "price": 110 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Cheese Danish",
                "displayIcon": "cheese-danish.png",
                "code": "CH-DAN",
                "sizes": [
                    { "name": "Regular", "code": "R", "price": 115 }
                ]
            },
            {
                "isAvailable": true,
                "name": "Blueberry Cheesecake",
                "displayIcon": "blueberry-cheesecake.png",
                "code": "BLU-CHE",
                "sizes": [
                    { "name": "Regular", "code": "R", "price": 105 }
                ]
            }
        ]
    }
];
