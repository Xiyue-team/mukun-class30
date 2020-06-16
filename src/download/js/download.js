class DownloadPage {
    init() {
        this.initEvent();
    }

    /*初始化事件*/
    initEvent() {
        setTimeout(()=>{
            let navContent = document.getElementsByClassName('nav-content');
            navContent[3].style.opacity = '1';
        },200)

        let versionButtons = document.getElementsByClassName('version-button');
        let pujiaoyun = document.getElementsByClassName('pujiaoyun')[0];
        let zhijiaoyun = document.getElementsByClassName('zhijiaoyun')[0];
        Object.keys(versionButtons).forEach(function(key) {
            versionButtons[key].onclick = function() {
                if (key === '0') {
                    // 普教云
                    versionButtons[0].style.backgroundColor = '#38DB96';
                    versionButtons[0].style.color = '#ffffff';

                    versionButtons[1].style.backgroundColor = '#ffffff';
                    versionButtons[1].style.color = '#004254';

                    pujiaoyun.style.display = 'inherit';
                    zhijiaoyun.style.display = 'none';
                } else if (key === '1') {
                    // 普教云
                    versionButtons[1].style.backgroundColor = '#38DB96';
                    versionButtons[1].style.color = '#ffffff';

                    versionButtons[0].style.backgroundColor = '#ffffff';
                    versionButtons[0].style.color = '#004254';

                    zhijiaoyun.style.display = 'inherit';
                    pujiaoyun.style.display = 'none';
                }
            }
        });
    }

}

function  hideHome(type) {
    if (type === 1) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('footer_container').style.marginTop = '550px';
    } else {
        document.getElementById('main').style.display = 'inherit';
        document.getElementById('footer_container').style.marginTop = '0';
        document.getElementsByClassName('section')[0].style.animation = "";
        document.getElementsByClassName('section')[0].style.backgroundColor = "#ffffff";
    }
}
