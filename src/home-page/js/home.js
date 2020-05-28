let animation = lottie.loadAnimation({
    container: document.getElementById('section1'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../assets/lottie-home/data.json'
});
let width = document.body.clientWidth;
window.onresize = function(){
    width = document.body.clientWidth;
}
if (width >= 734) {
    //手机端不需要
    let imgCover = document.getElementsByClassName('img-cover');
    let text = document.getElementsByClassName('text');
    let imgOpen = document.getElementsByClassName('img-open');
    let showBigImg = document.getElementsByClassName('showBigImg')[0];
    let borderText = document.getElementsByClassName('border-text');
    Object.keys(imgCover).forEach(function(key) {
        imgCover[key].onmouseover = function() {
            //隐藏原来的5个字
            Object.keys(text).forEach(function(key) {
                text[key].style.display = 'none';
            })
            //修改新出现的5个字(分大小屏)
            if (width >= 1440) {
                Object.keys(borderText).forEach(function(key) {
                    borderText[key].style.paddingTop = '565px';
                })
                borderText[key].style.paddingTop = '298px';
            } else if (1069 <= width && width < 1439) {
                Object.keys(borderText).forEach(function(key) {
                    borderText[key].style.paddingTop = '406px';
                })
                borderText[key].style.paddingTop = '221px';
            } else if (735 <= width && width < 1068) {
                Object.keys(borderText).forEach(function(key) {
                    borderText[key].style.paddingTop = '280px';
                })
                borderText[key].style.paddingTop = '152px';
            }
            //展开选中图片
            showBigImg.style.display = 'flex';
            Object.keys(imgOpen).forEach(function(key) {
                imgOpen[key].style.animation = "turnToSmall 1s ease forwards";
            })
            imgOpen[2].style.animation = "turnToBig" + key + " 1s ease forwards";
        };
        showBigImg.onmouseleave = function() {
            showBigImg.style.display = 'none';
            //显示原来的5个字
            Object.keys(text).forEach(function(key) {
                text[key].style.display = 'inherit';
            })
        };
    });
}



