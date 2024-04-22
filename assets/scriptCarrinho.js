document.addEventListener("DOMContentLoaded", function() {
    const productContainers = document.querySelectorAll(".product");
  
    productContainers.forEach(container => {
      const quantityElement = container.querySelector(".quantity");
      const totalPriceElement = container.querySelector(".total-price");
      const removeButton = container.querySelector(".remove-item");
      const addButton = container.querySelector(".add-item");
  
      removeButton.addEventListener("click", function() {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          const pricePerItem = parseFloat(totalPriceElement.textContent) / (quantity + 1);
          const newTotalPrice = pricePerItem * quantity;
          totalPriceElement.textContent = newTotalPrice.toFixed(2);
          updateTotalPrice();
        }
      });
  
      addButton.addEventListener("click", function() {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        const pricePerItem = parseFloat(totalPriceElement.textContent) / (quantity - 1);
        const newTotalPrice = pricePerItem * quantity;
        totalPriceElement.textContent = newTotalPrice.toFixed(2);
        updateTotalPrice();
      });
    });
  
    function updateTotalPrice() {
      const totalPriceElements = document.querySelectorAll(".total-price");
      let totalPrice = 0;
      totalPriceElements.forEach(element => {
        totalPrice += parseFloat(element.textContent);
      });
      document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    }
  });
  