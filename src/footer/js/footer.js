let arrow = document.getElementsByClassName("arrow-img");
let collapseOne =  $('#collapseOne');
let collapseTwo =  $('#collapseTwo');
let collapseThree =  $('#collapseThree');
class Footer {
    init() {
        this.initCollapse();
        let width = document.body.clientWidth;
        // this.clickUp(width);
        // window.onresize = () => {
        //     width = document.body.clientWidth;
        //     this.clickUp(width);
        // };
    }

    //  点击打开折叠项时翻转箭头，其他箭头还原
    arrowRotate(num) {
        Object.keys(arrow).forEach(function(key) {
            arrow[key].style.transform = "scaleY("+ -1 +")";
        });
        arrow[num-1].style.transform = "scaleY("+ 1 +")";
    }
    initCollapse() {
        collapseOne.on('show.bs.collapse', function () {
            this.arrowRotate(1);
        });
        collapseOne.on('hide.bs.collapse', function () {
            arrow[0].style.transform = "scaleY("+ -1 +")";
        });
        collapseTwo.on('show.bs.collapse', function () {
            this.arrowRotate(2);
        });
        collapseTwo.on('hide.bs.collapse', function () {
            arrow[1].style.transform = "scaleY("+ -1 +")";
        });
        collapseThree.on('show.bs.collapse', function () {
            this.arrowRotate(3);
        });
        collapseThree.on('hide.bs.collapse', function () {
            arrow[2].style.transform = "scaleY("+ -1 +")";
        });
    }

    clickUp(width){
        console.log(width)
        console.log(document.getElementsByClassName('section-mobile-footer'))
        if(width < 734 && document.getElementsByClassName('section-mobile-footer').length > 0) {
            let list = document.getElementsByClassName('section-mobile-footer')[0].getElementsByTagName('li');
            Object.keys(list).forEach(function(key) {
                console.log('123')
                list[key].onmouseup = function() {
                    //  收起展开项
                    collapseOne.collapse('hide');
                    collapseTwo.collapse('hide');
                    collapseThree.collapse('hide');
                }
            })
        }
    }
}
