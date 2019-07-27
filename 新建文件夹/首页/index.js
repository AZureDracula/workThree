let width = screen.availWidth;
let height = screen.availHeight;
let sea = document.getElementById("sea");
let sky = document.getElementById("sky");
let mount_cloud = document.getElementById("mount_cloud");
let sea_height = sea.height;
let little_cloud = document.getElementById("little_cloud");

window.onload = function(){
    sky.height = sky.width*2;
    console.log(sky.height);
    bg.width = window.screen.availWidth;
    bg.style.height = window.screen.availHeight;
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();

        var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
        var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
        var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
        var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
        var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
        var bIsAndroid = sUserAgent.match(/android/i) == 'android';
        if (bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid) {
            document.getElementById("pc-code").style.display = 'none';
            console.log("您的浏览设备为：phone");
        } 
        else {
            document.getElementById("pc-code").style.display = 'flex';
            console.log("您的浏览设备为：pc");
        }
     }
        browserRedirect();
}

window.onresize = function(){
    sky.height = sky.width*2;
    console.log(sky.height);
    bg.width = window.screen.availWidth;
    bg.style.height = window.screen.availHeight;
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();

        var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
        var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
        var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
        var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
        var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
        var bIsAndroid = sUserAgent.match(/android/i) == 'android';
        if (bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid) {
            document.getElementById("pc-code").style.display = 'none';
            console.log("您的浏览设备为：phone");
        } 
        else {
            document.getElementById("pc-code").style.display = 'flex';
            console.log("您的浏览设备为：pc");
        }
     }
        browserRedirect();
}