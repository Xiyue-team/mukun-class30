let animationHeader;
let animationFooter;
// let width = document.body.clientWidth;
let delta = 8; //鼠标每次滚动时动画运行的帧数
let swiper;

initLottie();
initImg();

const element = document.querySelector('.home_page');
let heightToTop = getScrollTop(); //滚动条距顶端的距离
let total = 0;  // 鼠标滚轮和动画帧数绑定的数据
let lastTime = 0;
let totalFooter = 0;  // 鼠标滚轮和动画帧数绑定的数据
let secondAni1 = 0;
const lastLottieContainer = document.querySelector('.lottie-footer');
secondAni1 = lastLottieContainer.offsetTop - 150;
// 鼠标滚轮滚动事件
element.addEventListener('mousewheel', function(e){
    heightToTop=element.scrollTop;  // 重新获取滚动条距离顶部位置
    if (width >= 734) {
        let nowTime = new Date().getTime();
        if (total <= 166 && heightToTop === 0) {
            event.returnValue = true;
            event.preventDefault();
        }
        // 只有在顶部时，执行动画
        if (total <= 168 && heightToTop === 0 && (nowTime-lastTime)>30) {
            lastTime = nowTime;
            // arr[data1,data2] data1-动画当前播放方向 data2-动画当前播放帧数
            let arr = countFrame(e, total, 166);
            total = arr[1];
            lottiePlay(arr[0],total, 0);
        }

        // 页面底部的lottie
        if (getScrollTop()>=secondAni1 && totalFooter>-2 && totalFooter< 181) {
            event.returnValue = true;
            event.preventDefault();
            let arr = countFrame(e, totalFooter, 181);
            totalFooter = arr[1];
            lottiePlay(arr[0],totalFooter, 1);
        }
    } else {
        // 手机端
        if (getScrollTop() > 4200) {
            animationFooter.play();
            document.getElementsByClassName('mask-text')[0].style.animation = "textShowOut 7s ease forwards";
            document.getElementsByClassName('mask')[0].style.animation = "imgShowOut 7s ease forwards";
            document.getElementsByClassName('section9')[0].style.animation = "maskShowOut 7s ease forwards";
            document.getElementsByClassName('dataDriveGallery')[0].style.animation = "imgShowIn 7s ease forwards";
            document.getElementsByClassName('dataDriveTitle')[0].style.animation = "textShowIn 7s ease forwards";
            document.getElementsByClassName('dataDriveContent')[0].style.animation = "textShowIn 7s ease forwards";
            let lottieFooter = document.getElementsByClassName('lottie-footer')[0];
            let display = window.getComputedStyle(lottieFooter,null).display;
            if (display == 'block') {
                setTimeout(function(){
                    document.getElementsByClassName('lottie-footer')[0].style.display = 'none';
                    document.getElementsByClassName('whriteDiv')[0].style.display = 'none';
                    document.getElementsByClassName('section9-rotation')[0].style.display = 'inherit';
                    container();
                },7500)
            }
        }
    }
});
if (width >= 734) {
    // 滚动条滚动事件
    element.addEventListener('scroll', function(){
        // 头部动画
        heightToTop=element.scrollTop; // 重新获取滚动条距离顶部位置
        if (heightToTop === 0) {
            // 回到顶部时，锁定滚动条，重新执行动画
            if (total>=166) {
                total = 165
            }
            lottiePlay(1, total, 0);
        }

        // 尾部动画
        if (getScrollTop()>=secondAni1) {
            if (totalFooter <= -2) {
                totalFooter += 1;
            }
        }
    });
}
// 窗口resize事件
window.onresize = function(){
    width = document.body.clientWidth;
    if (width >= 1440) {
        secondAni1 = 6450;
    } else if (width < 1439 && width >= 1069) {
        secondAni1 = 4500;
    } else if (width < 1068 && width >= 735) {
        secondAni1 = 4700;
    }
};


/**
 * 初始化lottie
 */
function initLottie() {
    // 166
    animationHeader = lottie.loadAnimation({
        container: document.getElementById('section1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/lottie/data.json'
    });
    if (width<734) {
        animationHeader.play();
        document.getElementsByClassName('section')[0].style.animation = "blackToWhite 6s ease forwards";
        setTimeout(function(){
            document.getElementsByClassName('lottieImg')[0].style.display = "none";
        },4500)
    }
    // 181
    animationFooter = lottie.loadAnimation({
        container: document.getElementById('dataDrive'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'assets/lottie/data-footer.json'
    });
    animationFooter.goToAndStop(-2,true);
}

/**
 * 初始化图片展示
 */
function initImg() {
    if (width >= 734) {
        //手机端不需要
        let imgCover = document.getElementsByClassName('img-cover');
        let text = document.getElementsByClassName('text');
        let imgOpen = document.getElementsByClassName('img-open');
        let showBigImg = document.getElementsByClassName('showBigImg')[0];
        let borderText = document.getElementsByClassName('border-text');
        Object.keys(imgCover).forEach(function(key) {
            imgCover[key].onmouseover = function() {
                setTimeout(function(){
                    //隐藏原来的5个字
                    Object.keys(text).forEach(function(key) {
                        text[key].style.display = 'none';
                    });
                    //修改新出现的5个字(分大小屏)
                    if (width >= 1440) {
                        Object.keys(borderText).forEach(function(key) {
                            borderText[key].style.paddingTop = '565px';
                        });
                        borderText[key].style.paddingTop = '298px';
                    } else if (1069 <= width && width < 1439) {
                        Object.keys(borderText).forEach(function(key) {
                            borderText[key].style.paddingTop = '406px';
                        });
                        borderText[key].style.paddingTop = '221px';
                    } else if (735 <= width && width < 1068) {
                        Object.keys(borderText).forEach(function(key) {
                            borderText[key].style.paddingTop = '280px';
                        });
                        borderText[key].style.paddingTop = '152px';
                    }
                    //展开选中图片
                    showBigImg.style.display = 'flex';
                    Object.keys(imgOpen).forEach(function(key2) {
                        imgOpen[key2].style.animation = "turnToSmall 1s ease forwards";
                    });
                    let imgUrl;
                    if (key == 0) {
                        imgUrl = 'url(\'assets/img/home_page/home/bei-open.png\')';
                    } else if (key == 1) {
                        imgUrl = 'url(\'assets/img/home_page/home/jiang-open.png\')';
                    } else if (key == 2) {
                        imgUrl = 'url(\'assets/img/home_page/home/pi-open.png\')';
                    } else if (key == 3) {
                        imgUrl = 'url(\'assets/img/home_page/home/fu-open.png\')';
                    } else if (key == 4) {
                        imgUrl = 'url(\'assets/img/home_page/home/kao-open.png\')';
                    }
                    imgOpen[2].style.backgroundImage = imgUrl;
                    imgOpen[2].style.animation = "turnToBig 1s ease forwards";
                },100);
            };
            showBigImg.onmouseout = function() {
                showBigImg.style.display = 'none';
                //显示原来的5个字
                Object.keys(text).forEach(function(key) {
                    text[key].style.display = 'inherit';
                })
            };
        });
    }
}

// 计算鼠标滚轮和动画帧数total和前进后退标识
function countFrame(e, total, totalFrame) {
    let goOrBack = 0; //动画前进或者后退: 0-前进 1-后退
    if(e.wheelDelta){//IE/Opera/Chrome
        if (e.wheelDelta < 0 && total < totalFrame){
            total += delta;
            if (total < 0) {
                total = 0
            }
            goOrBack = 0;
        } else if (e.wheelDelta > 0 && total >= -1) {
            total -= delta;
            if (total < 0 && totalFrame === 166) {
                total = 0
            } else if (total < -2 && totalFrame === 181) {
                // 尾部可以让动画消失
                total = -2
            }
            goOrBack = 1;
        }
    }else if(e.detail){//Firefox
        if (e.detail < 0 && total < totalFrame){
            total += delta;
            goOrBack = 0;
        } else if (e.detail > 0 && total > 0) {
            total -= delta;
            goOrBack = 1;
        }
    }
    return [goOrBack, total];
}

// 控制视频前进还是后退播放
function lottiePlay(goOrBack, total, type) {
    let animation = type===0?animationHeader:animationFooter;
    let min = 0;
    if (type === 1) {
        // 尾部可以让动画消失
        min = -2
    }
    for (let i=delta-1; i>=0; i--) {
        if (goOrBack === 0 && total-i >= 0){
            animation.goToAndStop(total-i,true);
        } else if (goOrBack === 1 && total+i >= min) {
            animation.goToAndStop(total+i,true);
        }
    }
    if (type === 0) {
        firstLottieAni (total);
    } else if (type === 1) {
        lastLotttieAni(total);
    }

}

// 尾部样式随lottie进度变化
function lastLotttieAni(total) {
    if (total >= 10) {
        document.getElementsByClassName('mask-text')[0].style.animation = "textShowOut 0.5s ease forwards";
    } else {
        let dataDriveTitle = document.getElementsByClassName('mask-text')[0];
        let opacity = window.getComputedStyle(dataDriveTitle, null).opacity;
        if (opacity < 1) {
            document.getElementsByClassName('mask-text')[0].style.animation = "textShowIn 0.5s ease forwards";
        }
    }
    if (total >= 120) {
        document.getElementsByClassName('mask')[0].style.animation = "maskShowOut 1s ease forwards";
        document.getElementsByClassName('section9')[0].style.animation = "blackToWhite 1s ease forwards";
        document.getElementsByClassName('dataDriveGallery')[0].style.animation = "imgShowIn 1s ease forwards";
    } else {
        let mask = document.getElementsByClassName('mask')[0];
        let opacity = window.getComputedStyle(mask, null).opacity;
        if (opacity < 0.55) {
            document.getElementsByClassName('mask')[0].style.animation = "maskShowIn 1s ease forwards";
            document.getElementsByClassName('section9')[0].style.animation = "whiteToBlack 1s ease forwards";
            document.getElementsByClassName('dataDriveGallery')[0].style.animation = "imgShowOut 1s ease forwards";
        }
    }
    if (total >= 183) {
        document.getElementsByClassName('dataDrive')[0].style.animation = "imgDown 1s ease forwards";
        document.getElementsByClassName('dataDriveTitle')[0].style.animation = "textShowIn 1s ease forwards";
        document.getElementsByClassName('dataDriveContent')[0].style.animation = "textShowIn 1s ease forwards";
        setTimeout(function(){
            document.getElementsByClassName('lottie-footer')[0].style.display = 'none';
            document.getElementsByClassName('whriteDiv')[0].style.display = 'none';
            document.getElementsByClassName('section9-rotation')[0].style.display = 'inherit';
            if(width >= 1440) {
                document.querySelector('.home_page').scrollTop = document.querySelector('.section9-rotation').offsetTop;
            }
            container();
        }, 500);
    } else {
        let dataDriveTitle = document.getElementsByClassName('dataDriveTitle')[0];
        let opacity = window.getComputedStyle(dataDriveTitle, null).opacity;
        if (opacity > 0) {
            document.getElementsByClassName('dataDrive')[0].style.animation = "imgUp 1s ease forwards";
            document.getElementsByClassName('dataDriveTitle')[0].style.animation = "textShowOut 1s ease forwards";
            document.getElementsByClassName('dataDriveContent')[0].style.animation = "textShowOut 1s ease forwards";
        }
    }
}

// 头部样式随着lottie进度变化
function firstLottieAni(total) {
    if (total >= 144) {
        document.getElementsByClassName('lottieImg')[0].style.display = "none";
        document.getElementsByClassName('section')[0].style.animation = "lottieChange 1s ease forwards";
    } else {
        let section = document.getElementsByClassName('section')[0];
        let backgroundColor = window.getComputedStyle(section, null).backgroundColor;
        if (backgroundColor === 'rgb(250, 250, 250)') {
            document.getElementsByClassName('lottieImg')[0].style.display = "inherit";
            document.getElementsByClassName('section')[0].style.animation = "lottieChangeBack 1s ease forwards";
        }
    }
}

//滚动条在Y轴上的滚动距离
function getScrollTop(){
    let bodyScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.querySelector('.home_page').scrollTop;
    }
    return bodyScrollTop;
}

// 数据驱动模块轮播组件
function container() {
    if (!swiper) {
        swiper = new Swiper('.swiper-container', {
            autoplay: true,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}


function hideHome(type) {
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
