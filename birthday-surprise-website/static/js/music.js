window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.5;

  // For autoplay to work reliably, trigger play on first interaction
  document.body.addEventListener("click", () => {
    music.play().catch(() => {});
  }, { once: true });
});
