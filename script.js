(function () {
  "use strict";

  const card = document.querySelector(".card");
  const submit_btn = document.querySelector(".submit-btn");
  const nums = document.querySelectorAll(".number");
  let rating = [];

  nums.forEach((num) => {
    num.addEventListener("click", () => {
      rating = num.value;
    });
  });

  submit_btn.addEventListener("click", () => {
    if (rating.length === 0) {
      location.reload();
    } else {
      card.classList.toggle("active");
      card.innerHTML = `<img class="thanku" src="images/illustration-thank-you.svg">
        <p class="rating">You selected ${rating} out of 5</p>
        <h2 class="thank-you">Thank you!</h2>
        <p class="rating-msg">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`;
    }
  });
})();
