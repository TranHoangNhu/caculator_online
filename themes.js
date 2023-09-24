// Lấy ra button chuyển đổi Dark Mode
const componentsDarkMode = document.querySelectorAll(
  ".container, .contain-caculator, #darkModeToggle"
);
const iconDarkMode = document.querySelector("#darkModeToggle i");

// Xác định trạng thái hiện tại của Dark Mode
let isDarkMode = true;
// Hàm chuyển đổi giữa Dark Mode và Light Mode
export default function handlerDarkModeToggle() {
  if (isDarkMode) {
    componentsDarkMode.forEach((element) => {
      element.classList.remove("dark-mode");
      iconDarkMode.classList.replace("fa-sun", "fa-moon");
    });
  } else {
    componentsDarkMode.forEach((element) => {
      element.classList.add("dark-mode");
      iconDarkMode.classList.replace("fa-moon", "fa-sun");
    });
  }
  isDarkMode = !isDarkMode;
  darkModeToggle.addEventListener("click", handlerDarkModeToggle);
}
