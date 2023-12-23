const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector("img"); // Mengubah dari .gif ke img karena Anda menggunakan tag <img> dalam HTML
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I like you too";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX); // Menambahkan tanda '=' setelah const randomX
  const randomY = Math.floor(Math.random() * maxY); // Menambahkan tanda '=' setelah const randomY

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
