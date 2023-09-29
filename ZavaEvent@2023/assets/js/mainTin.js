document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");

  function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = progress + "%";
  }

  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);
});