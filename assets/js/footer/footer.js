let arrow = document.getElementsByClassName("arrow-img");
window.onload = function() {
    let collapseOne =  $('#collapseOne');
    let collapseTwo =  $('#collapseTwo');
    let collapseThree =  $('#collapseThree');
    collapseOne.on('show.bs.collapse', function () {
        arrowRotate(1);
    });
    collapseOne.on('hide.bs.collapse', function () {
        arrow[0].style.transform = "scaleY("+ -1 +")";
    });
    collapseTwo.on('show.bs.collapse', function () {
        arrowRotate(2);
    });
    collapseTwo.on('hide.bs.collapse', function () {
        arrow[1].style.transform = "scaleY("+ -1 +")";
    });
    collapseThree.on('show.bs.collapse', function () {
        arrowRotate(3);
    });
    collapseThree.on('hide.bs.collapse', function () {
        arrow[2].style.transform = "scaleY("+ -1 +")";
    });
    let width = document.body.clientWidth;
    setTimeout(function(){
        clickUp(width);
    },500)
}

window.onresize = function(){
    width = document.body.clientWidth;
    clickUp(width);
};
function clickUp(width){
    if(width < 734 && document.getElementsByClassName('section-mobile-footer').length > 0) {
        let list = document.getElementsByClassName('section-mobile-footer')[0].getElementsByTagName('li');
        Object.keys(list).forEach(function(key) {
            list[key].onmouseup = function() {
                let collapseOne =  $('#collapseOne');
                let collapseTwo =  $('#collapseTwo');
                let collapseThree =  $('#collapseThree');
                //  收起展开项
                collapseOne.collapse('hide');
                collapseTwo.collapse('hide');
                collapseThree.collapse('hide');
            }
        })
    }
}
//  点击打开折叠项时翻转箭头，其他箭头还原
function arrowRotate(num) {
    Object.keys(arrow).forEach(function(key) {
        arrow[key].style.transform = "scaleY("+ -1 +")";
    });
    arrow[num-1].style.transform = "scaleY("+ 1 +")";
}
