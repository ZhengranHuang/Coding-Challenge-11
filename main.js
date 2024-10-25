//Task1:Setup HTML Structure for Order Form
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');
//Task2:Add Event Listener for Product Selection$Task3:Calculate Total Price Dynamically
function updateTotalPrice() {
const productPrice = parseFloat(productSelector.value);
const quantity = parseInt(quantityInput.value);
const totalPrice = productPrice * quantity;   
totalPriceElement.textContent = totalPrice.toFixed(2);
}
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);
//Task4:Handle Order Submission
placeOrderButton.addEventListener('click', function() {
const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
const quantity = quantityInput.value;
const totalPriceSubmission = totalPriceElement.textContent;
orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPriceSubmission}`;
});
