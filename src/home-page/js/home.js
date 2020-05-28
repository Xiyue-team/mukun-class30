let animation = lottie.loadAnimation({
    container: document.getElementById('section1'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../assets/lottie-home/data.json'
});

let imgCover = document.getElementsByClassName('img-cover');
Object.keys(imgCover).forEach(function(key) {
    imgCover[key].onmouseover = function() {
        Object.keys(imgCover).forEach(function(key) {
            imgCover[key].style.animation = "turnToSmall 1s ease forwards";
        })
        this.style.animation = "turnToBig" + key + " 1s ease forwards";
    };
    imgCover[key].onmouseout = function() {
        Object.keys(imgCover).forEach(function(key) {
            imgCover[key].style.width = '276px';
            imgCover[key].style.animation = '';
        });
    };
});


