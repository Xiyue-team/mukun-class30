window.onload = function() {
    //  导航栏中选中一项时，将其他项透明度改为40%
    let navContent = document.getElementsByClassName("nav-content");
    Object.keys(navContent).forEach(function(key) {
        //  鼠标移入时，将除自己外的项透明度改为40%
        navContent[key].getElementsByTagName("a")[0].onmouseover = function () {
            Object.keys(navContent).forEach(function(key2) {
                navContent[key2].style.opacity = '0.4';
            });
            navContent[key].style.opacity = '1';
        };
        navContent[key].getElementsByTagName("a")[0].onmouseout = function () {
            //  鼠标移除时还原样式,透明度改回100%
            Object.keys(navContent).forEach(function (key) {
                navContent[key].style.opacity = '1';
            });
        }
    })

    let list = document.getElementsByClassName('menu')[0].getElementsByTagName('li');
    let collapseOne = $('#collapseOne');
    Object.keys(list).forEach(function(key) {
        list[key].onmousedown = function() {
            Object.keys(list).forEach(function(key1) {
                list[key1].style.color = '#333333';
            });
            this.style.color = '#38DB96';
        };
        list[key].onmouseup = function() {
            //  收起展开项
            collapseOne.collapse('hide');
        }
    })
    let width = document.body.clientWidth;
    if (width >= 734) {
        $('#login')[0].contentWindow.showCloseButton();
    } else {
        $('#login-mobile')[0].contentWindow.hideCloseButton();
    }
};

window.onresize = () => {
    width = document.body.clientWidth;
};

function showLogin() {
    document.getElementsByClassName('login')[0].style.display = 'inherit';
    document.getElementsByClassName('mask')[0].style.display = 'inherit';
}

function closeLogin() {
    document.getElementsByClassName('login')[0].style.display = 'none';
    document.getElementsByClassName('mask')[0].style.display = 'none';
}

function showMobileLogin() {
    document.getElementsByClassName('login-mobile')[0].style.display = 'inherit';
}
