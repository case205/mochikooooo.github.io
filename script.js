document.addEventListener("DOMContentLoaded", () => {
  const mochikoButton = document.getElementById("mochiko");
  const music = document.getElementById("background-music");

  mochikoButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      mochikoButton.textContent = "音楽を停止";
    } else {
      music.pause();
      mochikoButton.textContent = "音楽を再生";
    }
  });
});


