


  
$(document).ready(function(){
    $('.singerTitle').next().hide()
     $('.menu-link').hide(

     )
    
})

$('.singerTitle').click(function(){
 
if( $(this).next().is(':visible')){
    $(this).next().slideUp(500)
    $(this).find('.fa-caret-up').addClass('d-none')
    $(this).find('.fa-caret-down').removeClass('d-none')

}else{
     $('.singerTitle').next().slideUp(500)
     $('.singerTitle').find('.fa-caret-up').addClass('d-none')
     $('.singerTitle').find('.fa-caret-down').removeClass('d-none')
     $(this).next().slideDown(500)
    $(this).find('.fa-caret-up').removeClass('d-none')
    $(this).find('.fa-caret-down').addClass('d-none')

}})

let boxWidth= $('.menu-link').outerWidth()
$('.nav').css({left:`-${boxWidth}+3px`},500) 
$('.menu').click(function(){
    $('.nav').css({left:"0px"},500) 
    })

$('.closebtn').click(function(){
    $('.nav').css({left:`-${boxWidth}px`},500) 
    })


    $(document).ready(function() {
        var countDownDate = new Date("Jul 30, 2024 00:00:00").getTime();
        var countdownFunction = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            
           
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
            
            if (distance < 0) {
                clearInterval(countdownFunction);
                $("#days").text("0");
                $("#hours").text("0");
                $("#minutes").text("0");
                $("#seconds").text("0");
            }},1000);
    });



    $(document).ready(function(){
        var maxLength = 100;
        $('#message').on('keyup', function() {
            var length = $(this).val().length;
            var remaining = maxLength - length;
            if (remaining < 0) {
                $('#charCount').html('<span>Exceeded by '+ (-remaining) +' characters</span>');
            } else {
                $('#charCount').text(remaining);
            }
        });
    });

    $(function() {
        $('.skitter-large').skitter();
      });


      $(window).on('scroll', function(){
 if($(window).scrollTop()>$('#Home').offset().top){
    $('.menu svg').css({color:"#E90074"})
    $('.menu p').css({color:"#E90074"})

        }else{
            $('.menu svg').css({color:"#fff"})
            $('.menu p').css({color:"#fff"})
      }})









