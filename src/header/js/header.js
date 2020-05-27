window.onload = function() {
    //  导航栏中选中一项时，将其他项透明度改为40%
    let navContent = document.getElementsByClassName("nav-content");
    Object.keys(navContent).forEach(function(key) {
        //  鼠标移入时，将除自己外的项透明度改为40%
        navContent[key].getElementsByTagName("a")[0].onmouseover = function () {
            Object.keys(navContent).forEach(function(key2) {
                navContent[key2].style.opacity = 0.4;
            })
            navContent[key].style.opacity = 1;
        }
        navContent[key].getElementsByTagName("a")[0].onmouseout = function () {
            //  鼠标移除时还原样式,透明度改回100%
            Object.keys(navContent).forEach(function (key) {
                navContent[key].style.opacity = 1;
            });
        }
    })
}

