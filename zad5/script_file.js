
  function click1(event) {
    event.preventDefault();
    let f1 = document.getElementsByName("field");
    let f2 = document.getElementsByName("select");
    let r = document.getElementById("resultat");
    let p = document.getElementById("price");
    if (f1[0].value.match(/^\d+$/) && f1[0].value>=0){
      r.innerHTML = "Итоговая сумма: " + f1[0].value* f2[0].value;
      p.innerHTML = "Цена за кг: "+ f2[0].value;
    }
    else {
      alert("Введите целое положительное число без других символов");
      r.innerHTML = "";
      p.innerHTML="";
    }
  }
  window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is Ready");
    let b = document.getElementById("pr");
    b.addEventListener("click", click1);
  });

