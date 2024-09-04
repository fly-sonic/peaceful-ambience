const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicBtn.src = "media/images/melody.png";
  } else {
    music.pause();
    musicBtn.src = "media/images/muted.png";
  }
});
