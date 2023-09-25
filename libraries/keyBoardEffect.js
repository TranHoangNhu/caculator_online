export default function handleKeyboard() {
  // Lấy tất cả các phần tử <span> không có class name
  var spanElements = document.querySelectorAll("span:not([class])");
  var keycodeMapping = {
    "/": 111, // Keycode for "/"
    "*": 106, // Keycode for "*"
    7: 103, // Keycode for "7"
    8: 104, // Keycode for "8"
    9: 105, // Keycode for "9"
    "-": 109, // Keycode for "-"
    4: 100, // Keycode for "4"
    5: 101, // Keycode for "5"
    6: 102, // Keycode for "6"
    "+": 107, // Keycode for "107"
    1: 97, // Keycode for "1"
    2: 98, // Keycode for "2"
    3: 99, // Keycode for "3"
    0: 96, // Keycode for "0"
    ".": 110, // Keycode for "."
  };
  // Thêm event listener cho mỗi span để xử lý sự kiện click
  spanElements.forEach(function (span) {
    span.addEventListener("click", function () {
      // Lấy nội dung của span
      var spanContent = span.textContent;

      // Lấy keycode tương ứng từ đối tượng ánh xạ
      var keycode = keycodeMapping[spanContent];

      // Kiểm tra xem có keycode tương ứng hay không
      if (keycode !== undefined) {
        // Gửi keycode tới ứng dụng hoặc thực hiện bất kỳ thao tác nào bạn muốn
        console.log("Span content:", spanContent);
        console.log("Keycode:", keycode);
      }
    });
  });
  window.addEventListener("keydown", function (event) {
    // Lấy keycode từ sự kiện
    var keycode = event.keyCode || event.which;

    // Lấy nội dung tương ứng với keycode từ đối tượng ánh xạ
    var spanContent = Object.keys(keycodeMapping).find(function (content) {
      return keycodeMapping[content] === keycode;
    });

    // Nếu nội dung tồn tại, thay đổi CSS của span tương ứng
    if (spanContent) {
      spanElements.forEach(function (span) {
        if (span.textContent === spanContent) {
          span.classList.add("active");
        }
      });
    }
  });
  window.addEventListener("keyup", function (event) {
    // Lấy keycode từ sự kiện
    var keycode = event.keyCode || event.which;

    // Lấy nội dung tương ứng với keycode từ đối tượng ánh xạ
    var spanContent = Object.keys(keycodeMapping).find(function (content) {
      return keycodeMapping[content] === keycode;
    });

    // Nếu nội dung tồn tại, thay đổi CSS của span tương ứng
    if (spanContent) {
      spanElements.forEach(function (span) {
        if (span.textContent === spanContent) {
          span.classList.remove("active");
        }
      });
    }
  });
}
