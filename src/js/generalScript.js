const inputs = document.querySelectorAll('.main-search-form');
const clearButtons = document.querySelectorAll('.clear-search-btn');

inputs.forEach((input, index) => {
    const clearButton = clearButtons[index];

    clearButton.addEventListener('click', () => {
        input.value = '';
        input.focus();
    });
});

let priceItem = 828100;
let subTotal = 0;
subTotal = priceItem;

const priceElement = document.querySelector('.bag-items-container > div > div:last-child > p:last-of-type');
const subtotalELement = document.querySelector('.bag-dropdown > :nth-child(3) > :last-child')
const formattedPrice = priceItem.toLocaleString('id-ID');
let formattedSubtotal = subTotal.toLocaleString('id-ID');

priceElement.innerHTML = `Rp${formattedPrice}`;
subtotalELement.innerHTML = `Rp${formattedSubtotal}`;

let counter = 1;
const itemElement = document.querySelector('.bag-items-container > div > :last-child > div > div > span');
itemElement.innerHTML = counter;

function addItem () {
    if (counter < 30) {
        counter++;
        itemElement.innerHTML = counter;

        subTotal = priceItem * counter;
        formattedSubtotal = subTotal.toLocaleString('id-ID');
        subtotalELement.innerHTML = `Rp${formattedSubtotal}`;
    }
}

function subItem () {
    if (counter > 1) {
        counter--;
        itemElement.innerHTML = counter;

        subTotal = priceItem * counter;
        formattedSubtotal = subTotal.toLocaleString('id-ID');
        subtotalELement.innerHTML = `Rp${formattedSubtotal}`;
    }
}