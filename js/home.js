function updateOnlinePlayers() {
    fetch('https://api.minetools.eu/ping/mcvn.gleeze.com')
        .then((response) => response.json())
        .then((data) => {
            const numPlayers = data.players.online;
            document.querySelector('.playerOnline').textContent = numPlayers;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
setInterval(updateOnlinePlayers, 5000);

var i = 0;
var thuvienText = 'Minecraft';

function typeEffect() {
    if (i < thuvienText.length) {
        document.getElementById('textEffect').innerHTML += thuvienText.charAt(i);
        i++;
        setTimeout(typeEffect, 180);
    } else {
        setTimeout(deleteEffect, 1000);
    }
}

function deleteEffect() {
    if (i >= 0 && thuvienText.length > 0) {
        var str = thuvienText.substring(0, i);
        document.getElementById('textEffect').innerHTML = str;
        i--;
        setTimeout(deleteEffect, 50);
    } else {
        i = 0;
        if (thuvienText === 'Vui vẻ') {
            thuvienText = 'Minecraft';
        } else if (thuvienText === 'Văn minh') {
            thuvienText = 'Vui vẻ';
        } else if (thuvienText === 'Hỗ trợ tốt') {
            thuvienText = 'Văn minh';
        } else {
            thuvienText = 'Hỗ trợ tốt';
        }

        setTimeout(typeEffect, 500);
    }
}

typeEffect();

document.addEventListener('DOMContentLoaded', function () {
    var descriptionImgs = document.getElementsByClassName('descriptionImg');
    var clickCount = 0;

    for (var i = 0; i < descriptionImgs.length; i++) {
        descriptionImgs[i].addEventListener('click', function () {
            clickCount++;

            if (clickCount === 3) {
                window.location.href = 'fromKito/easterEgg.html';
            }
        });
    }
});
