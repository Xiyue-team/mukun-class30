class AppPage {
    init() {
        this.initEvent();
    }

    /*初始化事件*/
    initEvent() {
        let swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        // 窗口resize事件
        window.onresize = () => {
        };
    }

}
