const menuScrollCard = document.getElementById("menuScrollCard");
const sizeChoicesContainer = document.getElementById("sizeChoicesContainer");
const receiptContainer = document.getElementById("receiptContainer");
const labelTotal = document.getElementById("labelTotal");
const receipt = [];

function loadProducts(categoryIndex) {
    menuScrollCard.innerHTML = '';

    const category = products[categoryIndex];
    const items = category.contents;

    items.forEach((item, index) => {
        menuScrollCard.innerHTML += `
            <div class="card item">
                <div class="icon">
                    <img src="assets/img/`+ category.category + `/` + item.displayIcon + `" alt="` + item.name + `"
                    onclick="loadSelectedItemSizes(`+ categoryIndex + `,` + index + `)">
                </div>
                <p>`+ item.name + `</p>
            </div>
            `;
    });

    clearSizeSelection();
}

function loadSelectedItemSizes(categoryIndex, itemIndex) {

    const sizes = products[categoryIndex].contents[itemIndex].sizes;
    clearSizeSelection();

    sizes.forEach((size, sizeIndex) => {
        sizeChoicesContainer.innerHTML += `
            <div class="card" onclick="addToReceipt('`+ categoryIndex + `','` + itemIndex + `',` + sizeIndex + `)">` + size.name + `</div>
        `
    });

}

function addToReceipt(categoryIndex, itemIndex, sizeIndex) {
    const category = products[categoryIndex];
    const item = category.contents[itemIndex];
    const size = item.sizes[sizeIndex];
    const orderName = item.code + '-' + size.code;
    const subtotal = size.price.toFixed(2);
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
        }

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
            '<span>' + orderedItem.name + '</span>' +
            '<span class="px-5 d-flex justify-content-between align-items-center quantity">' +
            '<button onclick="changeQty(this, -1)">−</button>' +
            '<span class="px-3 quantity">' + orderedItem.quantity + '</span>' +
            '<button onclick="changeQty(this, 1)">+</button>' +
            '</span>' +
            '<span class="ms-5 text-end">' + subtotal.toFixed(2) + '</span>' +
            '<span><i class="fa-solid fa-trash pe-2" onclick="removeItem(this)"></i></span>' +
            '</div>';

        total += subtotal;
    });

    labelTotal.innerText = '₱' + total.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}



function clearSizeSelection() {
    sizeChoicesContainer.innerHTML = '';
}

function changeQty(btn, delta) {
    const receiptItem = btn.closest('.receipt-item');
    const itemName = receiptItem.querySelector('span').textContent.trim();

    for (let i = 0; i < receipt.length; i++) {
        if (receipt[i].name === itemName) {
            receipt[i].quantity += delta;
            if (receipt[i].quantity < 1) receipt[i].quantity = 1;
            break;
        }
    }

    updateReceipt();
}

function removeItem(icon) {
    const receiptItem = icon.closest('.receipt-item');
    const itemName = receiptItem.querySelector('span').textContent.trim();

    for (let i = 0; i < receipt.length; i++) {
        if (receipt[i].name === itemName) {
            receipt.splice(i, 1);
            break;
        }
    }

    updateReceipt();
}


