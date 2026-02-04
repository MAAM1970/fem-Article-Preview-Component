const shareBtn = document.querySelector(".share-btn");
const shareToast = document.querySelector(".share-toast");
// const shareImage = document.querySelector(".share--btn-image");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  shareToast.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  // Only proceed if click is outside the share button
  if (!shareBtn.contains(e.target)) {
    // Check if share UI is currently active (visible)
    const isActive = shareBtn.classList.contains("active");

    if (isActive) {
      // Hide share UI only if it is currently visible
      shareBtn.classList.remove("active");
      shareToast.classList.add("hidden");
    }
    // If not active, do nothing to avoid flicker
  }
});
