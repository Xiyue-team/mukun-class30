window.onload = function() {
    //  导航栏中选中一项时，将其他项透明度改为40%
    let navContent = document.getElementsByClassName("nav-content");
    // Object.keys(navContent).forEach(function(key) {
    //     //  鼠标移入时，将除自己外的项透明度改为40%
    //     navContent[key].getElementsByTagName("a")[0].onmouseover = function () {
    //         Object.keys(navContent).forEach(function(key2) {
    //             navContent[key2].style.opacity = '0.4';
    //         });
    //         navContent[key].style.opacity = '1';
    //     };
    //     navContent[key].getElementsByTagName("a")[0].onmouseout = function () {
    //         //  鼠标移除时还原样式,透明度改回100%
    //         Object.keys(navContent).forEach(function (key) {
    //             navContent[key].style.opacity = '1';
    //         });
    //     }
    // })
    if(document.getElementsByClassName('menu').length > 0){
        let list1 = document.getElementsByClassName('menu')[0].getElementsByTagName('li');
        let collapseOneHeader = $('#collapseOne-header');
        Object.keys(list1).forEach(function(key) {
            list1[key].onmousedown = function() {
                Object.keys(list1).forEach(function(key1) {
                    list1[key1].style.color = '#333333';
                });
                this.style.color = '#38DB96';
            };
            list1[key].onmouseup = function() {
                //  收起展开项
                collapseOneHeader.collapse('hide');
            }
        })
    }
    //调用子页面方法显示/隐藏关闭按钮
    let width = document.body.clientWidth;
    setTimeout(()=>{
        if (width >= 734) {
            $('#login')[0].contentWindow.showCloseButton();
        } else {
            $('#login-mobile')[0].contentWindow.hideCloseButton();
        }
    },500)
};

window.onresize = () => {
    width = document.body.clientWidth;
};

function showLogin() {
    document.getElementsByClassName('login')[0].style.display = 'inherit';
    // document.getElementsByClassName('mask')[0].style.display = 'inherit';
}

function closeLogin() {
    document.getElementsByClassName('login')[0].style.display = 'none';
    // document.getElementsByClassName('mask')[0].style.display = 'none';
}

function showMobileLogin() {
    document.getElementsByClassName('login-mobile')[0].style.display = 'inherit';
    window.parent.hideHome(1);
}

function backToHome() {
    document.getElementsByClassName('login-mobile')[0].style.display = 'none';
    window.parent.hideHome(0);
}

function toHomePage() {
    window.location.href='../home-page/index.html';
}
function toResourcePage() {
    window.location.href='../resources-page/index.html';
}
function toAppPage() {
    window.location.href='../app-page/index.html';
}
function toDownloadPage() {
    window.location.href='../download-page/index.html';
}
function test() {
    console.log('123')
}
