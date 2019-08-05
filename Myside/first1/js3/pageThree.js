$(function(){
    $(".pageThrid").scroll(function(){
        var aa = $(this).scrollLeft()
        console.log("混动条1位置"+aa)
        if(aa > 150){
            document.querySelector('.Thrid_texttwo').style.display = 'block';
        }
        if(aa > 440){
            document.querySelector('.Thrid_textthree').style.display = 'block';
        }
    })
})
