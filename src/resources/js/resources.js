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
        // 窗口resize事件
        window.onresize = () => {
            this.zoomImg();
        };
    }

    // 图片高度等比缩放
    zoomImg() {
        let width = document.body.clientWidth;
        let detailImgs = document.getElementsByClassName('detail-img');
        let detailWidth = document.getElementsByClassName('detail')[0].offsetWidth;
        let backHeight, imgWidth,imgHeight;
        if (width >= 1440) {
            backHeight = width * (800/1920);
            // imgWidth = detailWidth * (497/628);
            // imgHeight = imgWidth * (410/497);
            // Object.keys(detailImgs).forEach(function(key){
            //     detailImgs[key].style.width = imgWidth.toString() + 'px';
            //     detailImgs[key].style.height = imgHeight.toString() + 'px';
            // })
        } else if (width < 1440 && width >= 1069) {
            backHeight = width * (800/1280);
            // imgWidth = detailImgs[0].offsetWidth;
            // imgHeight = imgWidth * (410/414.6);
            // Object.keys(detailImgs).forEach(function(key){
            //     detailImgs[key].style.width = '100%';
            //     detailImgs[key].style.height = imgHeight.toString() + 'px';
            // })
        } else if (width < 1069 && width >= 735) {
            backHeight = width * (650/900);
            // imgWidth = detailImgs[0].offsetWidth;
            // Object.keys(detailImgs).forEach(function(key){
            //     detailImgs[key].style.width = '100%';
            //     detailImgs[key].style.height = imgWidth.toString() + 'px';
            // })
        } else if (width < 735) {
            backHeight = width * (236/321);
            // imgWidth = detailImgs[0].offsetWidth;
            // imgHeight = imgWidth * (284/321);
            // Object.keys(detailImgs).forEach(function(key){
            //     detailImgs[key].style.width = '100%';
            //     detailImgs[key].style.height = imgHeight.toString() + 'px';
            // })
        }
        document.getElementsByClassName('section2')[0].style.height = backHeight.toString() + 'px';
        document.getElementsByClassName('section3')[0].style.paddingTop = (backHeight + 60).toString() + 'px';
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
