let numbers = Array.from(document.querySelectorAll(".number"));
let btn = document.querySelector(".rating-box .btn");
let ratingBox = document.querySelector(".rating-box");
let thanksBox = document.querySelector(".thanks-box");
let stars = 0;

function removeActive() {
  numbers.forEach((num) => num.classList.remove("active"));
}

function selectNumbers(num) {
  removeActive();
  num.target.classList.add("active");
  stars = num.target.dataset.number
}


numbers.forEach((num) => {
  num.addEventListener("click", selectNumbers);
});

btn.onclick = function () {
  ratingBox.style.display = "none";
  thanksBox.style.display = "flex";
  document.querySelector(".thanks-box .rate").innerHTML = stars;
}

