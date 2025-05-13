let categories = [];
let products = [];
let sizes = [];
const receipt = [];
const categoryScrollCard = document.getElementById("categoryScrollCard");
const menuScrollCard = document.getElementById("menuScrollCard");
const sizeChoicesContainer = document.getElementById("sizeChoicesContainer");
const receiptContainer = document.getElementById("receiptContainer");
const labelTotal = document.getElementById("labelTotal");

// FETCH METHODS
const getAllCategories = async () => {

    // CATEGORIES ENDPOINT
    const url = 'http://localhost/Academics/APPDEV/marklouie019.github.io/ADET/a06/backend/categories.php';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            categories = data;
            categoryScrollCard.innerHTML = '';
            loadCategories();
            getProductsByCategory(1);
        });
}

const getProductsByCategory = async (categoryID) => {

    // PRODUCTS BY CATEGORY ENDPOINT
    const url = 'http://localhost/Academics/APPDEV/marklouie019.github.io/ADET/a06/backend/products.php';

    const categoryData = {
        categoryID: categoryID
    };

    menuScrollCard.innerHTML = `
        <div class="loader-wrapper">
            <span class="loader"></span>
        </div>`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts(categoryID);
        });
}

const getSizesByProduct = async (productID) => {

    // SIZES BY PRODUCT ENDPOINT
    const url = 'http://localhost/Academics/APPDEV/marklouie019.github.io/ADET/a06/backend/sizes.php';

    const productData = {
        productID: productID
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
        .then(response => response.json())
        .then(data => {
            sizes = data;
            console.log(sizes);
            loadSelectedItemSizes(productID, data);
        });
}

// LOAD METHODS
function loadCategories() {

    categories.forEach(category => {
        categoryScrollCard.innerHTML += `
            <div class="card">
                <img src="assets/img/ui/`+ category.displayIcon + `" alt="` + category.name + `" onclick="getProductsByCategory(` + category.categoryID + `)">
            </div>`;
    });
}

function loadProducts(categoryIndex) {
    menuScrollCard.innerHTML = '';

    let category = null;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].categoryID == categoryIndex) {
            category = categories[i];
            break;
        }
    }

    products.forEach((product, index) => {
        menuScrollCard.innerHTML += `
            <div class="card item">
                <div class="icon">
                    <img src="assets/img/`+ category.name + `/` + product.displayIcon + `" alt="` + product.name + `"
                    onclick="getSizesByProduct(` + product.productID + `)">
                </div>
                <p class="product-name">`+ product.name + `</p>
            </div>
            `;
    });

    clearSizeSelection();
}

function loadSelectedItemSizes(productID, sizesData) {
    clearSizeSelection();

    sizesData.forEach((size, sizeIndex) => {
        sizeChoicesContainer.innerHTML += `
            <div class="card" onclick="addToReceipt('` + productID + `',` + sizeIndex + `)">
            <p class="size-label p-2">` + size.name + `</p></div>
        `
    });

    sizes = sizesData;
}

// MAIN POS METHODS 
function addToReceipt(productID, sizeIndex) {
    const size = sizes[sizeIndex];

    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].productID == productID) {
            product = products[i];
            break;
        }
    }

    if (!product) return;

    const orderName = product.code + '-' + size.code;
    const subtotal = parseFloat(size.price).toFixed(2);
    let orderExists = false;

    for (let i = 0; i < receipt.length; i++) {
        if (receipt[i].name === orderName) {
            receipt[i].quantity += 1;
            orderExists = true;
            break;
        }
    }

    if (!orderExists) {
        const orderedItem = {
            name: orderName,
            price: subtotal,
            size: size,
            quantity: 1
        };

        receipt.push(orderedItem);
    }

    clearSizeSelection();
    updateReceipt();
}

function updateReceipt() {
    let total = 0;
    receiptContainer.innerHTML = '';

    receipt.forEach(function (orderedItem) {
        const subtotal = orderedItem.price * orderedItem.quantity;

        receiptContainer.innerHTML +=
            '<div class="receipt-item d-flex align-items-center py-3">' +
            '<span class="me-auto order-name">' + orderedItem.name + '</span>' +
            '<span class="px-5 me-auto d-flex justify-content-between align-items-center quantity">' +
            '<button onclick="changeQuantity(this, -1)">−</button>' +
            '<span class="px-3 quantity">' + orderedItem.quantity + '</span>' +
            '<button onclick="changeQuantity(this, 1)">+</button>' +
            '</span>' +
            '<span class="pe-3">' + subtotal.toFixed(2) + '</span>' +
            '<span><i class="fa-solid fa-trash pe-2" onclick="removeItem(this)"></i></span>' +
            '</div>';

        total += subtotal;
    });

    labelTotal.innerText = '₱' + total.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function clearSizeSelection() {
    sizeChoicesContainer.innerHTML = '';
}

function changeQuantity(btn, changeAmount) {
    const receiptItem = btn.closest('.receipt-item');
    const itemName = receiptItem.querySelector('span').textContent;

    for (let i = 0; i < receipt.length; i++) {
        if (receipt[i].name === itemName) {
            receipt[i].quantity += changeAmount;
            if (receipt[i].quantity < 1) receipt[i].quantity = 1;
            break;
        }
    }

    updateReceipt();
}

function removeItem(icon) {
    const receiptItem = icon.closest('.receipt-item');
    const itemName = receiptItem.querySelector('span').textContent;

    for (let i = 0; i < receipt.length; i++) {
        if (receipt[i].name === itemName) {
            receipt.splice(i, 1);
            break;
        }
    }

    updateReceipt();
}

function clearAllItems() {
    receipt.length = 0;
    updateReceipt();
}

function completePurchase() {
    clearAllItems();
}

getAllCategories();
