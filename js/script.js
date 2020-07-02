$(document).ready(function(){
    
    //네비게이션
    $("nav>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $("nav>ul>li").mouseleave(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });   
    
    
    //이미지슬라이드
    $(".slideImg").slick({
        dots: true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
    });
    
    //tab1
    var eventBtn = $(".event_btn > ul > li");
    var eventCont = $(".event_cont>div");
    eventCont.hide().eq(0).show();
    eventBtn.click(function(e){
        e.preventDefault();
        var target=$(this);
        var index=target.index();
        eventBtn.removeClass("active");
        target.addClass("active");
        eventCont.css("display","none");
        eventCont.eq(index).css("display","block");
    });
    
    //더보기
     $(".cont1 .more").click(function(e){
         e.preventDefault();
    $(".cont1>ul>li").toggleClass("hidden");    
     });
    
    //tab2
    var cont2Btn = $(".cont2_btn > ul > li");
    var cont2Cont = $(".cont2_cont > ul");
    cont2Cont.hide().eq(0).show();
    cont2Btn.click(function(e){
        e.preventDefault();
        var target=$(this);
        var index=target.index();
        cont2Btn.removeClass("active");
        target.addClass("active");
        cont2Cont.css("display","none");
        cont2Cont.eq(index).css("display","block");        
    });    
});

