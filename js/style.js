$(function(){
    $('.btn').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
        let idx = $(this).index()
        let sd = $('main section').eq(idx).offset().top
        $('html,body').animate({
            scrollTop : sd
        })
 })
   $(window).scroll(function(){
        $('main section').each(function(){
         
            if($(this).offset().top <= $(window).scrollTop()+114){
                let idx = $(this).index()
                $('header ul li').removeClass('on')
                $('header ul li').eq(idx).addClass('on')
            }
        })

     })
})
