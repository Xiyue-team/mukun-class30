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

        // 窗口resize事件
        window.onresize = () => {
        };
    }

    // 更多应用模块轮播组件
    container() {
        let width = document.body.clientWidth;
        let swiper = new Swiper('.swiper-container', {
            autoplay: true,
            slidesPerView: width>=735?3:1,
            spaceBetween: width>=735?30:0,
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
