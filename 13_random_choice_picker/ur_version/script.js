const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tagsArray = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // add to DOM
  tagsEl.innerHTML = "";
  tagsArray.forEach((tag) => {
    const spanEl = document.createElement("span");
    spanEl.classList = "tag";
    spanEl.innerText = tag;
    tagsEl.appendChild(spanEl);
  });
}
