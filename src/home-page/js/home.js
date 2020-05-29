let animation;
let width;
let delta = 8; //鼠标每次滚动时动画运行的帧数
class HomePage {

    init() {
        this.initView();
        this.initEvent();
    }

    /*初始化界面*/
    initView() {
        width = document.body.clientWidth;
        this.initLottie();
        this.initImg();
    }

    /*初始化事件*/
    initEvent() {
        const element = document.querySelector('.home_page');
        let heightToTop=element.scrollTop; //滚动条距顶端的距离
        let total = 0;  // 鼠标滚轮和动画帧数绑定的数据
        let lastTime = 0;
        // 鼠标滚轮滚动事件
        element.addEventListener('mousewheel', (e) => {
            heightToTop=element.scrollTop;  // 重新获取滚动条距离顶部位置
            let nowTime = new Date().getTime();
            if (total <= 166) {
                event.returnValue = true;
                event.preventDefault();
            }
            // 只有在顶部时，执行动画
            if (total <= 168 && heightToTop === 0 && (nowTime-lastTime)>30) {
                lastTime = nowTime;
                // arr[data1,data2] data1-动画当前播放方向 data2-动画当前播放帧数
                let arr = this.countFrame(e, total);
                total = arr[1];
                this.lottiePlay(arr[0],total);
            }
        });
        // 滚动条滚动事件
        element.addEventListener('scroll', () => {
            heightToTop=element.scrollTop; // 重新获取滚动条距离顶部位置
            if (heightToTop === 0) {
                // 回到顶部时，锁定滚动条，重新执行动画
                if (total>=166) {
                    total = 165
                }
                this.lottiePlay(1, total);
            }
        });
        // 窗口resize事件
        window.onresize = () => {
            width = document.body.clientWidth;
        };
    }

    // 计算鼠标滚轮和动画帧数total和标识前进后退
    countFrame(e, total) {
        let goOrBack = 0; //动画前进或者后退: 0-前进 1-后退
        if(e.wheelDelta){//IE/Opera/Chrome
            if (e.wheelDelta < 0 && total < 166){
                total += delta;
                if (total < 0) {
                    total = 0
                }
                goOrBack = 0;
            } else if (e.wheelDelta > 0 && total > 0) {
                total -= delta;
                if (total < 0) {
                    total = 0
                }
                goOrBack = 1;
            }
        }else if(e.detail){//Firefox
            if (e.detail < 0 && total < 166){
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
    lottiePlay(goOrBack, total) {
        for (let i=delta-1; i>=0; i--) {
            if (goOrBack === 0){
                animation.goToAndStop(total-i,true);
            } else if (goOrBack === 1) {
                animation.goToAndStop(total+i,true);
            }
        }
        if (total>=144) {
            document.getElementsByClassName('section')[0].style.backgroundColor = '#ffffff';
        } else {
            document.getElementsByClassName('section')[0].style.backgroundColor = '#000000';
        }
    }

    /**
     * 初始化lottie
     */
    initLottie() {
        animation = lottie.loadAnimation({
            container: document.getElementById('section1'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '../assets/lottie-home/data.json'
        });
    }

    /**
     * 初始化图片展示
     */
    initImg() {
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
                    Object.keys(imgOpen).forEach(function(key) {
                        imgOpen[key].style.animation = "turnToSmall 1s ease forwards";
                    });
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
    }

}

