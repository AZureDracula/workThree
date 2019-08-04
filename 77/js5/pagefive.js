let leftS = 0;
let ticking = false;
function doSomething(leftS) {
    document.querySelector('#five_ship').style.transform = 'translateX(' + leftS * 0.25 + "px)";
}
document.querySelector("#pageFive_2").onscroll = () => {
    leftS = document.querySelector("#pageFive_2").scrollLeft
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(leftS);
            ticking = false;
        });

        ticking = true;
    }
}
$(function(){
    $(".pageFifth").scroll(function(){
        var aa = $(this).scrollLeft()
        console.log("混动条位置"+aa)
        if(aa > 120){
            document.querySelector('.five_texttwo').style.display = 'block';
        }
        if(aa > 400){
            document.querySelector('.five_textthree').style.display = 'block';
        }
    })
})