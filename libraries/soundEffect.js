export default function handleSoundEffect() {
  const toggleModeSound = new Audio("../audios/switch-mode.mp3");
  const keyTouchShortSound = new Audio("../audios/typing-on-laptop-short.mp3");
  const keyTouchLongSound = new Audio("../audios/typing-on-laptop-long.mp3");
  const toggleMode = document.querySelector("#darkModeToggle");
  const keyTyping = document.querySelectorAll(".buttons span");

  toggleMode.addEventListener("click", () => {
    toggleModeSound.currentTime = 0;
    toggleModeSound.play();
  });
  keyTyping.forEach((thisKey, index) => {
    thisKey.addEventListener("click", () => {
      if (index !== 0 && index !== 16) {
        keyTouchShortSound.currentTime = 0;
        keyTouchShortSound.play();
      } else {
        keyTouchShortSound.currentTime = 0;
        keyTouchLongSound.currentTime = 0;
        keyTouchLongSound.play();
      }
    });
  });
}
