const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicBtn.src = "media/images/music/music-on-skyblue.svg";
  } else {
    music.pause();
    musicBtn.src = "media/images/music/music-off-skyblue.svg";
  }
});
