(function () {
  "use strict";

  const card = document.querySelector("#card");
  const thanks_card = document.querySelector("#thanks-card");
  const rating_number = document.querySelector(".rating-number")
  const submit_btn = document.querySelector(".submit-btn");
  const nums = document.querySelectorAll(".number");
  let rating = 0;

  nums.forEach((num) => {
    num.addEventListener("click", (event) => {
      rating = num.value;
      nums.forEach(num => {
        if (num !== event.currentTarget) {
          num.classList.remove("active");
        }
      });
      num.classList.add("active");
      })
  });

  submit_btn.addEventListener("click", () => {
    if (rating > 0) {
      card.style.display = "none";
      thanks_card.style.display = "block";
      rating_number.innerHTML = rating;
    }
  });
})();
