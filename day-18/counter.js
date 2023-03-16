const $ = document;

const COUNTER_INCREMENT = $.getElementById("increment");
const COUNTER_DECREMENT = $.getElementById("decrement");
const ITEM_VALUE = $.getElementById("numberValue");
const MESSAGE_CONTAINER = $.getElementById("messageContainer");


increaseCount = (e) => {
    e.preventDefault();
    let itemValue = ITEM_VALUE.value;
    let newValue = Number(itemValue) + 1;
    setNewValue(newValue);
}

decreaseCount = (e) => {
    e.preventDefault();
    let itemValue = ITEM_VALUE.value;
    if(Number(itemValue) >= 1) {
        let newValue = Number(itemValue) - 1;
        setNewValue(newValue);
    } else {
        MESSAGE_CONTAINER.innerHTML = "cannot perform decrement since the value of item is less than 1";
    }
}

setNewValue = (newValue) => {
    ITEM_VALUE.value = String(newValue);
    MESSAGE_CONTAINER.innerHTML = `new value of item is ${newValue} `;
}

COUNTER_INCREMENT.addEventListener("click", increaseCount);
COUNTER_DECREMENT.addEventListener("click", decreaseCount);
