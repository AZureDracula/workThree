
$(function(){
    $(".pagefour").scroll(function(){
        var bb = $(this).scrollLeft()
//      console.log("混动条2位置"+bb);
        if(bb > 120){
            document.querySelector('.four_texttwo').style.display = 'block';
        }
        if(bb > 400){
            document.querySelector('.four_textthree').style.display = 'block';
        }
    })
})