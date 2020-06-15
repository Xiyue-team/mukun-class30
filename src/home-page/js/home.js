let animationHeader;
let animationFooter;
let width;
let delta = 8; //鼠标每次滚动时动画运行的帧数
class HomePage {
    init() {
        new Footer().init();
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
        setTimeout(()=>{
            let navContent = document.getElementsByClassName('nav-content');
            navContent[0].style.opacity = '1';
        },200)

        const element = document.querySelector('.home_page');
        let heightToTop = this.getScrollTop(); //滚动条距顶端的距离
        let total = 0;  // 鼠标滚轮和动画帧数绑定的数据
        let lastTime = 0;
        let totalFooter = 0;  // 鼠标滚轮和动画帧数绑定的数据
        let secondAni1 = 0;
        let secondAni2 = 0;
        if (width >= 1440) {
            secondAni1 = 6450;
            secondAni2 = 6700;
        } else if (width < 1439 && width >= 1069) {
            secondAni1 = 4500;
            secondAni2 = 4650;
        } else if (width < 1068 && width >= 735) {
            secondAni1 = 4700;
            secondAni2 = 4900;
        }
        // 鼠标滚轮滚动事件
        element.addEventListener('mousewheel', (e) => {
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
                    let arr = this.countFrame(e, total, 166);
                    total = arr[1];
                    this.lottiePlay(arr[0],total, 0);
                }

                // 页面底部的lottie
                if (this.getScrollTop()>=secondAni1 && this.getScrollTop()<=secondAni2 && totalFooter>-2 && totalFooter< 181) {
                    event.returnValue = true;
                    event.preventDefault();
                    let arr = this.countFrame(e, totalFooter, 181);
                    totalFooter = arr[1];
                    this.lottiePlay(arr[0],totalFooter, 1);
                }
            } else {
                // 手机端
                if (this.getScrollTop() > 4200) {
                    animationFooter.play();
                    document.getElementsByClassName('mask-text')[0].style.animation = "textShowOut 7s ease forwards";
                    document.getElementsByClassName('mask')[0].style.animation = "imgShowOut 7s ease forwards";
                    document.getElementsByClassName('section9')[0].style.animation = "maskShowOut 7s ease forwards";
                    document.getElementsByClassName('dataDriveGallery')[0].style.animation = "imgShowIn 7s ease forwards";
                    document.getElementsByClassName('dataDriveTitle')[0].style.animation = "textShowIn 7s ease forwards";
                    document.getElementsByClassName('dataDriveContent')[0].style.animation = "textShowIn 7s ease forwards";
                }
            }
        });
        if (width >= 734) {
            // 滚动条滚动事件
            element.addEventListener('scroll', () => {
                // 头部动画
                heightToTop=element.scrollTop; // 重新获取滚动条距离顶部位置
                if (heightToTop === 0) {
                    // 回到顶部时，锁定滚动条，重新执行动画
                    if (total>=166) {
                        total = 165
                    }
                    this.lottiePlay(1, total, 0);
                }

                // 尾部动画
                if (this.getScrollTop()>=secondAni1 && this.getScrollTop()<=secondAni2) {
                    if (totalFooter <= -2) {
                        totalFooter += 1;
                    } else if (totalFooter>=181) {
                        totalFooter = 180;
                    }

                }
            });
        }
        // 窗口resize事件
        window.onresize = () => {
            width = document.body.clientWidth;
            if (width >= 1440) {
                secondAni1 = 6450;
                secondAni2 = 6700;
            } else if (width < 1439 && width >= 1069) {
                secondAni1 = 4500;
                secondAni2 = 4650;
            } else if (width < 1068 && width >= 735) {
                secondAni1 = 4700;
                secondAni2 = 4900;
            }
        };
    }

    // 计算鼠标滚轮和动画帧数total和前进后退标识
    countFrame(e, total, totalFrame) {
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
    lottiePlay(goOrBack, total, type) {
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
            if (total>=144) {
                document.getElementsByClassName('section')[0].style.animation = "blackToWhite 1s ease forwards";
            } else {
                let section = document.getElementsByClassName('section')[0];
                let backgroundColor = window.getComputedStyle(section,null).backgroundColor;
                if(backgroundColor === 'rgb(255, 255, 255)'){
                    document.getElementsByClassName('section')[0].style.animation = "whiteToBlack 1s ease forwards";
                }
            }
        } else if (type === 1) {
            if (total>=10) {
                document.getElementsByClassName('mask-text')[0].style.animation = "textShowOut 0.5s ease forwards";
            } else {
                let dataDriveTitle = document.getElementsByClassName('mask-text')[0];
                let opacity = window.getComputedStyle(dataDriveTitle,null).opacity;
                if (opacity < 1){
                    document.getElementsByClassName('mask-text')[0].style.animation = "textShowIn 0.5s ease forwards";
                }
            }
            if (total>=120) {
                document.getElementsByClassName('mask')[0].style.animation = "maskShowOut 1s ease forwards";
                document.getElementsByClassName('section9')[0].style.animation = "blackToWhite 1s ease forwards";
                document.getElementsByClassName('dataDriveGallery')[0].style.animation = "imgShowIn 1s ease forwards";
            } else {
                let mask = document.getElementsByClassName('mask')[0];
                let opacity = window.getComputedStyle(mask,null).opacity;
                if (opacity < 0.55) {
                    document.getElementsByClassName('mask')[0].style.animation = "maskShowIn 1s ease forwards";
                    document.getElementsByClassName('section9')[0].style.animation = "whiteToBlack 1s ease forwards";
                    document.getElementsByClassName('dataDriveGallery')[0].style.animation = "imgShowOut 1s ease forwards";
                }
            }
            if (total>=183) {
                document.getElementsByClassName('dataDrive')[0].style.animation = "imgDown 1s ease forwards";
                document.getElementsByClassName('dataDriveTitle')[0].style.animation = "textShowIn 1s ease forwards";
                document.getElementsByClassName('dataDriveContent')[0].style.animation = "textShowIn 1s ease forwards";
            } else {
                let dataDriveTitle = document.getElementsByClassName('dataDriveTitle')[0];
                let opacity = window.getComputedStyle(dataDriveTitle,null).opacity;
                if (opacity > 0) {
                    document.getElementsByClassName('dataDrive')[0].style.animation = "imgUp 1s ease forwards";
                    document.getElementsByClassName('dataDriveTitle')[0].style.animation = "textShowOut 1s ease forwards";
                    document.getElementsByClassName('dataDriveContent')[0].style.animation = "textShowOut 1s ease forwards";
                }
            }
        }

    }

    /**
     * 初始化lottie
     */
    initLottie() {
        // 166
        animationHeader = lottie.loadAnimation({
            container: document.getElementById('section1'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '../assets/lottie-home/data.json'
        });
        if (width<734) {
            animationHeader.play();
            document.getElementsByClassName('section')[0].style.animation = "blackToWhite 6s ease forwards";
        }
        // 181
        animationFooter = lottie.loadAnimation({
            container: document.getElementById('dataDrive'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '../assets/lottie-home/data-footer.json'
        });
        animationFooter.goToAndStop(-2,true);
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
                    setTimeout(()=>{
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
                    },200);
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

    //滚动条在Y轴上的滚动距离
    getScrollTop(){
        let bodyScrollTop = 0;
        if(document.body){
            bodyScrollTop = document.querySelector('.home_page').scrollTop;
        }
        return bodyScrollTop;
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

