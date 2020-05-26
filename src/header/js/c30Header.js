window.onload = function() {
    //  导航栏中选中一项时，将其他项透明度改为40%
    let navContent = document.getElementsByClassName("nav-content");
    Object.keys(navContent).forEach(function(key) {
        //  鼠标移入时，将除自己外的项透明度改为40%
        navContent[key].onmouseover = function () {
            navContent.item(0).style.opacity = 0.4;
            navContent.item(1).style.opacity = 0.4;
            navContent.item(2).style.opacity = 0.4;
            navContent.item(3).style.opacity = 0.4;
            navContent.item(4).style.opacity = 0.4;
            navContent[key].style.opacity = 1;
        }
        navContent[key].onmouseout = function () {
            //  鼠标移除时还原样式,透明度改回100%
            Object.keys(navContent).forEach(function (key) {
                navContent[key].style.opacity = 1;
            });
        }
    })
}
//  手机端显示/隐藏菜单
function showMenu() {
    let menu = document.getElementsByClassName("menu")[0];
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}


