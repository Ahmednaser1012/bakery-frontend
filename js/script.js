
let about =$("#aboutt").offset().top;

$(window).scroll(function(){
    let sc=$(window).scrollTop( );
    if(sc>about - 100){
     $("#go").css("backgroundColor","rgb(0,0,0,0.7)");
     $("#btn").fadeIn(1000); 
    }
    else{
     $("#go").css("backgroundColor","transparent");
     $("#btn").fadeOut(1000);
    }
   
})

$("#btn").click(function(){

    $("html,body").animate({scrollTop:"0"},100);
})


$(document).ready(function(){
    $("#loding").fadeOut(900,function(){
        $("body").css({overflow:"auto"});
    })
})