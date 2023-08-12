const img = document.getElementById('img');

// Kiểm tra xem thẻ body có class "darkMode" hay không
function checkDarkMode() {
    if (body.classList.contains('darkMode')) {
        // Nếu có, thay đổi ảnh trong thẻ img thành ảnh mới
        img.src = 'assets/imgs/napTheImgDarkMode.png';
    } else {
        // Ngược lại, đặt lại ảnh trong thẻ img về ảnh ban đầu
        img.src = 'assets/imgs/napTheImgLightMode.png';
    }
}

// Sử dụng MutationObserver để theo dõi các thay đổi trong classList
const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        // Gọi hàm kiểm tra lại khi classList thay đổi
        checkDarkMode();
    });
});

// Xác định cấu hình cho MutationObserver
const config = {
    attributes: true, // Theo dõi các thay đổi trong thuộc tính
    attributeFilter: ['class'], // Chỉ theo dõi thay đổi trong thuộc tính class
};

// Bắt đầu theo dõi các thay đổi trong thẻ body
observer.observe(body, config);

// Gọi hàm kiểm tra ban đầu khi trang được tải
checkDarkMode();
