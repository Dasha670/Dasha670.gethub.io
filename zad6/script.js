function click1(event) {
 function click1(event) {
  event.preventDefault();
  let f1 = document.getElementsByName("field");
  let f2 = document.getElementsByName("select");
  let r = document.getElementById("resultat");
  let p = document.getElementById("price");
  if (f1[0].value.match(/^\d+$/) && f1[0].value >= 0) {
      r.innerHTML = "Итоговая сумма: " + f1[0].value * f2[0].value;
      p.innerHTML = "Цена за кг: " + f2[0].value;
  } else {
      alert("Введите целое положительное число без других символов");
      r.innerHTML = "";
      p.innerHTML = "";
  }
}
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is Ready");
  let b = document.getElementById("pr");
  b.addEventListener("click", click1);

  const quantityInput = document.getElementById("quantity");
  const serviceTypeRadios = document.querySelectorAll("input[name="serviceType"]");
  const optionsDiv = document.getElementById("options");
  const propertiesDiv = document.getElementById("properties");
  const optionSelect = document.getElementById("optionSelect");
  const propertyCheckbox = document.getElementById("propertyCheckbox");
  const totalPriceDisplay = document.getElementById("totalPrice");

  function updatePrice() {
      let quantity = parseInt(quantityInput.value) || 0;
      let basePrice = 0;

      const selectedType = document.querySelector("input[name="serviceType"]:checked").value;
      let optionPrice = parseInt(optionSelect.value) || 0;
      let propertyPrice = propertyCheckbox.checked ? 50 : 0;
      if (selectedType === "1") {
          basePrice = 10;
      } else if (selectedType === "2") {
          basePrice = 50;
      } else if (selectedType === "3") {
          basePrice = 100;
      }
      let totalPrice = (basePrice + optionPrice + propertyPrice) * quantity;
      totalPriceDisplay.textContent = totalPrice;
  }

  function updateForm() {
      const selectedType = document.querySelector("input[name="serviceType"]:checked").value;

      if (selectedType === "1") {
          optionsDiv.classList.add("hidden");
          propertiesDiv.classList.add("hidden");
      } else if (selectedType === "2") {
          optionsDiv.classList.remove("hidden");
          propertiesDiv.classList.add("hidden");
      } else if (selectedType === "3") {
          optionsDiv.classList.add("hidden");
          propertiesDiv.classList.remove("hidden");
      }

      updatePrice();
  }

  quantityInput.addEventListener("input", updatePrice);
  serviceTypeRadios.forEach(radio => {
      radio.addEventListener("change", updateForm);
  });
  optionSelect.addEventListener("change", updatePrice);
  propertyCheckbox.addEventListener("change", updatePrice);

  updateForm();
});

});
