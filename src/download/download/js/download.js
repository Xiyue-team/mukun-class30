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

function hideHome(type) {
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

function section4Nav() {
    window.open('https://fs.iclass30.com/software/common/%E6%99%BA%E8%83%BD%E5%A4%A7%E5%B1%8F.exe');
}
function section5Nav() {
    window.open(' https://fs.iclass30.com/software/common/%E6%99%BA%E8%83%BDPC.exe');
}
function section6NavAndroid() {
    window.open('https://fs.iclass30.com/Android/pptAssistant/pptAssistant.apk');
}
function section6NavIos() {
    window.open('https://apps.apple.com/cn/app/id1360134121');
}
function section7NavAndroid() {
    window.open('https://fs.iclass30.com/Android/studentclient/studenthomework/studenthomework.apk');
}
function section7NavIos() {
    window.open('https://apps.apple.com/cn/app/id1469687292');
}
// 指教大屏
function zj_dp() {
    window.open('http://file.icve.com.cn/ssykt/396/315/6334ECF7D1B94C83CC969CE50B811FBD.exe');
}

//c30 
function zj_c30 () {
	 window.open('http://file.icve.com.cn/ssykt/148/553/2538A6ABFA3C5D3CD9984EFF24A745B8.exe');
}
// 学生端：
function zj_xsd () {
	 window.open('http://file.icve.com.cn/ssykt/853/516/D558120948B5D31D4AB371748A52B8CA.exe');
}
