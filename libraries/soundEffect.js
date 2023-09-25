export default function handleSoundEffect() {
  const toggleModeSound = new Audio("../audios/switch-mode.mp3");
  const toggleMode = document.querySelector("#darkModeToggle");
  toggleMode.addEventListener("click", () => {
    toggleModeSound.currentTime = 0;
    toggleModeSound.play();
  });
}
