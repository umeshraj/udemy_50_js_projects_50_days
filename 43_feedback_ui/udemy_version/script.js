const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");

let selectedRating = "satistfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
    console.log(selectedRating);
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you </strong>
    <br>
    <strong>Feeback:${selectedRating}</strong>
    <p>We'll use your feedback to improve</p>

  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
