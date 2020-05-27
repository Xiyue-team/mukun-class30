$(function(){
    let arrow = document.getElementsByClassName("arrow-img");
    //  点击打开折叠项时翻转箭头，其他箭头还原
    function arrowRotate(num) {
        Object.keys(arrow).forEach(function(key) {
            arrow[key].style.transform = "scaleY("+ -1 +")";
        });
        arrow[num-1].style.transform = "scaleY("+ 1 +")";
    }
    let collapseOne =  $('#collapseOne');
    collapseOne.on('show.bs.collapse', function () {
        arrowRotate(1);
    });
    collapseOne.on('hide.bs.collapse', function () {
        arrow[0].style.transform = "scaleY("+ -1 +")";
    });
    let collapseTwo =  $('#collapseTwo');
    collapseTwo.on('show.bs.collapse', function () {
        arrowRotate(2);
    });
    collapseTwo.on('hide.bs.collapse', function () {
        arrow[1].style.transform = "scaleY("+ -1 +")";
    });
    let collapseThree =  $('#collapseThree');
    collapseThree.on('show.bs.collapse', function () {
        arrowRotate(3);
    });
    collapseThree.on('hide.bs.collapse', function () {
        arrow[2].style.transform = "scaleY("+ -1 +")";
    });
});
