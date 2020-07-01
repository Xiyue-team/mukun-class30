//禁止右键菜单
document.oncontextmenu = function(){return false;}
zoomDisabled();

// 禁止页面缩放
function zoomDisabled() {
    $(document).keydown(function (event) {
        //event.metaKey mac的command键
        if ((event.ctrlKey === true || event.metaKey === true)&& (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187  || event.which === 189)){
            event.preventDefault();
        }
    });
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    });
}


// 调用登录接口
function login() {
    if(validate()){
        $("#loginError").html("");
        save_cookies();
        $("#loginForm").submit();
        closeForm();
    }
}

// 关闭登录窗口
function closeForm() {
    window.parent.closeLogin();
}

// 记住密码
function remember (type) {
    if (type == 1) {
        $('#unselect').css('display','none');
        $('#selected').css('display','inherit');
    } else {
        $('#selected').css('display','none');
        $('#unselect').css('display','inherit');
    }
};
//注册
function register() {
    $('#login_container').css('display','none');
    $('#active_container').css('display','inherit');
    $('#step1_back').css('display','inherit');
}


//忘记密码
function forgetPassWord() {
    $('#login_container').css('display','none');
    $('#resetPwdFormDiv').css('display','inherit');
    $('#step1_back').css('display','inherit');
}

// 返回
function backToLogin() {
    $('#login_container').css('display','inherit');
    $('#active_container').css('display','none');
    $('#resetPwdFormDiv').css('display','none');
    $('#step1_back').css('display','none');
}

function showCloseButton() {
    $('#close_login').css('display', 'inherit');
    $('#logo1').css('display', 'inherit');
}

function hideCloseButton() {
    $('#close_login').css('display', 'none');
    $('#logo1').css('display', 'none');
}


function  validate(){
    var result=true;
    var  name= $("#useraccount").val();
    var  password=$("#userpassword").val();
    if(name==null||name==""){
        result=false;
        $("#loginError").html("用户名不能为空");
        return  result;
    }

    if(password==null||password==""){
        result=false;
        $("#loginError").html("密码不能为空");
    }
    return  result;
}

function save_cookies(){
    if($("#rember").prop("checked")){
        var username = $("#useraccount").val();
        var password = $("#userpassword").val();
        $.cookie("remember","true",{expires:7});
        $.cookie("username",username,{expires:7 });
        $.cookie("password",password,{expires:7 });
    }else{
        $.cookie("remember","false",{expires:-1});
        $.cookie("username","",{ expires:-1 });
        $.cookie("password","",{ expires:-1 });
    }
};


$(document).ready(function(){
    var rem = $.cookie('remember');
    if(rem){
        $("#rember").prop("checked",true);
        $("#useraccount").val($.cookie("username"));
        $("#userpassword").val($.cookie("password"));
    }else{
        $("#rember").prop("checked",false);
        $("#useraccount").val("yanshi001");
        $("#userpassword").val("mukun2020");
    }
});


$("#userpassword").keydown(function(e) {
    if (e.keyCode == 13) {
        login();
    }
});


$("#useraccount").keydown(function(e) {
    if (e.keyCode == 13) {
        login();
    }
});
