function openTab(event, tabName) {
    // Lấy tất cả các tabContent và ẩn chúng
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Lấy tất cả các tabLinks và loại bỏ lớp active
    var tabLinks = document.getElementsByClassName('tabLinks');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }

    // Hiển thị tabContent tương ứng với tab được nhấp và thêm lớp active vào tabLinks
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
