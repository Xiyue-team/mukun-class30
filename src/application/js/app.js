let swiper;
class AppPage {
    init() {
        this.initView();
        this.initEvent();
    }

    /*初始化界面*/
    initView() {
        this.addCard();
    }

    /*初始化事件*/
    initEvent() {
        this.container();

        setTimeout(()=>{
            let navContent = document.getElementsByClassName('nav-content');
            navContent[2].style.opacity = '1';
        },200)

        // 窗口resize事件
        window.onresize = () => {
            let width = document.body.clientWidth;
            if (width>=735) {
                swiper.params.slidesPerView = 3;
                swiper.params.spaceBetween = 30;
                swiper.params.slidesPerGroup = 3;
            } else {
                swiper.params.slidesPerView = 1;
                swiper.params.spaceBetween = 0;
                swiper.params.slidesPerGroup = 1;
            }
        };
    }

    // 更多应用模块轮播组件
    container() {
        let width = document.body.clientWidth;
        swiper = new Swiper('.swiper-container', {
            autoplay: true,
            slidesPerView: width>=735?3:1,
            spaceBetween: width>=735?30:0,
            slidesPerGroup: width>=735?3:1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // 更多应用模块添加卡片
    addCard() {
        const para = document.getElementsByClassName('swiper-wrapper')[0];
        // 添加html模板，样式如下
        // <div class="swiper-slide flex flex-col">
        //     <div class="app-img mx-auto"><img src=""></div>
        //     <div class="app-title"></div>
        //     <div class="app-content mx-auto"></div>
        // </div>
        for (let i in moreApp) {
            // 外层包裹的div
            let swiperSlide = document.createElement('div');
            swiperSlide.className = 'swiper-slide flex flex-col';
            // 图片
            let appImg = document.createElement('div');
            appImg.className = 'app-img mx-auto';
            let img = document.createElement('img');
            img.src = moreApp[i].imgSrc;
            appImg.appendChild(img);
            // 标题
            let appTitle = document.createElement('div');
            appTitle.className = 'app-title';
            appTitle.innerHTML = moreApp[i].title;
            // 文字内容
            let appContent = document.createElement('div');
            appContent.className = 'app-content mx-auto';
            appContent.innerHTML = moreApp[i].content;
            swiperSlide.appendChild(appImg);
            swiperSlide.appendChild(appTitle);
            swiperSlide.appendChild(appContent);
            para.appendChild(swiperSlide);
        }
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
