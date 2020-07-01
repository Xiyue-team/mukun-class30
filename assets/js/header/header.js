if(document.getElementsByClassName('menu').length > 0){
    let list1 = document.getElementsByClassName('menu')[0].getElementsByTagName('li');
    Object.keys(list1).forEach(function(key) {
        list1[key].onmousedown = function() {
            Object.keys(list1).forEach(function(key1) {
                list1[key1].style.color = '#333333';
            });
            this.style.color = '#38DB96';
        };
    })
}
//调用子页面方法显示/隐藏关闭按钮
let width = document.body.clientWidth;
setTimeout(function(){
    if (width >= 1069) {
        if ($('#login')[0] && $('#login')[0].contentWindow.showCloseButton) {
            $('#login')[0].contentWindow.showCloseButton();
        }
    } else {
        if ($('#login-mobile')[0] && $('#login-mobile')[0].contentWindow.hideCloseButton) {
            $('#login-mobile')[0].contentWindow.hideCloseButton();
        }
        if ($('#login-medium')[0] && $('#login-medium')[0].contentWindow.hideCloseButton) {
            $('#login-medium')[0].contentWindow.hideCloseButton();
        }
    }
},1000)


window.onresize = function(){
    width = document.body.clientWidth;
};

function showLogin() {
    let width = document.body.clientWidth;
    if (width < 1069) {
        document.getElementsByClassName('login-medium')[0].style.display = 'inherit';
        window.parent.hideHome(1);
    } else {
        document.getElementsByClassName('login')[0].style.display = 'inherit';
        document.getElementsByClassName('mask-header')[0].style.display = 'inherit';
    }

}

function closeLogin() {
    document.getElementsByClassName('login')[0].style.display = 'none';
    document.getElementsByClassName('mask-header')[0].style.display = 'none';
}

function showMobileLogin() {
    $('#collapseOne-header').collapse('hide');
    document.getElementsByClassName('login-mobile')[0].style.display = 'inherit';
    window.parent.hideHome(1);
}

function backToHome() {
    document.getElementsByClassName('login-mobile')[0].style.display = 'none';
    window.parent.hideHome(0);
}

function toHomePage() {
    $('#collapseOne-header').collapse('hide');
    window.location.href='index.html';
}
function toResourcePage() {
    $('#collapseOne-header').collapse('hide');
    window.location.href='resources.html';
}
function toAppPage() {
    $('#collapseOne-header').collapse('hide');
    window.location.href='application.html';
}
function toDownloadPage() {
    $('#collapseOne-header').collapse('hide');
    window.location.href='download.html';
}
