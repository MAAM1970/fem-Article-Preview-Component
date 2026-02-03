const shareBtn = document.querySelector(".share-btn");
const shareToast = document.querySelector(".share-toast");
const shareImage = document.querySelector(".share--btn-image");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  shareToast.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!shareBtn.contains(e.target)) {
    shareBtn.classList.toggle("active");
    shareToast.classList.toggle("hidden");
  }
});
