const $ = document;

const ITEM_NAME = $.getElementById("item");
const ITEM_PRICE = $.getElementById("price");
const ITEM_UPDATED_PRICE = $.getElementById("updatedPrice");
const FORM_BUTTON = $.getElementById("submitPriceButton");

const getFormValues = () => {
    let itemName = ITEM_NAME.value.toUpperCase();
    let itemPrice = ITEM_PRICE.value;
    itemPrice = Number(itemPrice) + 10;
    ITEM_NAME.value = '';
    ITEM_PRICE.value = '';
    displayUpdatedPriceMessage(itemName, itemPrice);
}

const displayUpdatedPriceMessage = (itemName, itemPrice) => {
    let message = `The updated price for ${itemName} is ${itemPrice} Rs.`;
    ITEM_UPDATED_PRICE.innerHTML = message;
}

const submitForm = (e) => {
    e.preventDefault();
    getFormValues();
}

FORM_BUTTON.addEventListener("click", submitForm);
