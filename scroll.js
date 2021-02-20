$().ready(function(){
    $(".aus").click(function(){
        $('html, body').animate({
            scrollTop: $("#as").offset().top
        });
    });
    $("#br").click(function(){
        $('html, body').animate({
            scrollTop: $("#braz").offset().top
        });
    });
    $("#mex").click(function(){
        $('html, body').animate({
            scrollTop: $("#mx").offset().top
        });
    });
    $("#me").click(function(){
        $('html, body').animate({
            scrollTop: $("#mea").offset().top
        });
    });
    $(".home").click(function(){
        $('html, body').animate({
            scrollTop: $("#ho").offset().top
        });
    });
    $("#co").click(function(){
        $('html, body').animate({
            scrollTop: $("#cov").offset().top
        });
    });
    $("#about-us").click(function(){
        $('html, body').animate({
            scrollTop: $("#abs").offset().top
        });
    });
   
});