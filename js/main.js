const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Kiểm tra trạng thái đã lưu trong web storage
const darkModeEnabled = localStorage.getItem('darkModeEnabled');

if (darkModeEnabled === 'true') {
    body.classList.add('darkMode');
    darkModeToggle.innerHTML = '<i class="fa fa-sun"></i>';
} else {
    body.classList.remove('darkMode');
    darkModeToggle.innerHTML = '<i class="fa fa-moon"></i>';
}

darkModeToggle.addEventListener('click', function () {
    const isDark = body.classList.contains('darkMode');

    if (isDark) {
        body.classList.remove('darkMode');
        darkModeToggle.innerHTML = '<i class="fa fa-moon"></i>';
        localStorage.setItem('darkModeEnabled', 'false');
        console.log('darkMode false');
    } else {
        body.classList.add('darkMode');
        darkModeToggle.innerHTML = '<i class="fa fa-sun"></i>';
        localStorage.setItem('darkModeEnabled', 'true');
        console.log('darkMode on');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menuBnts');
    const menu = document.querySelector('.menuBar');
    let menuOpen = false;

    menuButton.addEventListener('click', function () {
        if (menuOpen) {
            menuOpen = false;
            menu.classList.remove('menuOpen');
        } else {
            menuOpen = true;
            menu.classList.add('menuOpen');
        }
    });
});

var copyIpButtons = document.querySelectorAll('.copyIp');

copyIpButtons.forEach(function (copyIpButton) {
    copyIpButton.addEventListener('click', function () {
        var notification = document.querySelector('.notification');

        notification.style.right = '14px';

        var textToCopy = 'mcvn.gleeze.com';
        var tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setTimeout(function () {
            notification.style.right = '-100%';
        }, 5000);
    });
});
