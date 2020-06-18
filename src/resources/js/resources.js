class ResourcesPage {
    init() {
        this.zoomImg();
        this.initEvent();
    }

    /*初始化事件*/
    initEvent() {
        setTimeout(()=>{
            let navContent = document.getElementsByClassName('nav-content');
            navContent[1].style.opacity = '1';
        },200)

        this.imgWidth();

        // 窗口resize事件
        window.onresize = () => {
            this.imgWidth();
            this.zoomImg();
        };
    }

    // 图片高度等比缩放
    zoomImg() {
        let width = document.body.clientWidth;
        let backHeight;
        if (width >= 1440) {
            backHeight = width * (800/1920);
        } else if (width < 1440 && width >= 1069) {
            backHeight = width * (800/1280);
        } else if (width < 1069 && width >= 735) {
            backHeight = width * (650/900);
        } else if (width < 735) {
            backHeight = width * (236/321);
        }
        document.getElementsByClassName('section2')[0].style.height = backHeight.toString() + 'px';
        document.getElementsByClassName('section3')[0].style.paddingTop = (backHeight + 60).toString() + 'px';
    }

    imgWidth() {
        // 动态计算背景大图宽度
        let section2 = document.getElementsByClassName('section2')[0];
        section2.style.width = document.getElementById('main').offsetWidth + 'px';
    }

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
