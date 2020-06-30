initEvent();

/*初始化事件*/
function initEvent() {

    imgWidth();
    zoomImg();

    // 窗口resize事件
    window.onresize = function () {
        imgWidth();
        zoomImg();
    };
}

// 图片高度等比缩放
function zoomImg() {
    let width = document.body.clientWidth;
    let backHeight;
    if (width >= 1440) {
        backHeight = width * (800/1920);
    } else if (width < 1440 && width >= 1280) {
        backHeight = width * (800/1280);
    } else if (width < 1280 && width >= 900) {
        backHeight = width * (650/900);
    } else if (width < 900 && width >= 594) {
        backHeight = width * (450/594);
    } else if (width < 594) {
        backHeight = width * (236/321);
    }
    document.getElementsByClassName('section2')[0].style.height = backHeight.toString() + 'px';
    document.getElementsByClassName('section3')[0].style.paddingTop = (backHeight + 60).toString() + 'px';
}

function imgWidth() {
    // 动态计算背景大图宽度
    let section2 = document.getElementsByClassName('section2')[0];
    section2.style.width = document.getElementById('main').offsetWidth + 'px';
}

function  hideHome(type) {
    if (type === 1) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('footer_container').style.marginTop = '550px';
    } else {
        document.getElementById('main').style.display = 'inherit';
        document.getElementById('footer_container').style.marginTop = '0';
        document.getElementsByClassName('section')[0].style.animation = "";
        document.getElementsByClassName('section')[0].style.backgroundColor = "#ffffff";
    }
}
