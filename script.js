 const img = document.getElementById("hero");
  img.style.opacity = 0;
  img.style.transition = "opacity 2s ease-in";

  window.addEventListener("load", () => {
    img.style.opacity = 1;
  });