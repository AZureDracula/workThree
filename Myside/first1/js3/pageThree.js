$(function(){
    $(".pageThrid").scroll(function(){
        var aa = $(this).scrollLeft()
        console.log("混动条1位置"+aa)
        if(aa > 150){
            document.querySelector('.texttwo').style.display = 'block';
        }
        if(aa > 440){
            document.querySelector('.textthree').style.display = 'block';
        }
    })
})
