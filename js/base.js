$(document).ready(function () {
    // top btn
    let $topBar = $('.topbar');
    let $menuBtn = $('.menu-btn');
    let menuOpen = false;
    // nav
    let $btnTop = $('#topBtn');
    let exist = false;
    //footer
    let $footerTop = $("footer").offset().top;
    let $footer = $("footer");
    let $footerBody = $(".footer-body");
    
    function loadOver (){
        
        $(window).scrollTop(0);
        
        $topBar.animate({ top: 0, opacity: 1 }, 1000);
    }
    
    loadOver ();

    $(window).scroll(function(){
        scrollFn();
    })

    function scrollFn () {
        let $windowT = $(window).scrollTop();
        let $windowH = $(window).height();
        
        if( $windowT > $windowH / 2) {
            $btnTop.css({"opacity":"1","cursor":"pointer"});
            exist = true;
        }else {
            $btnTop.css({"opacity":"0","cursor":"default"})
            exist = false;
        }

        
        // animation
        if( $windowT + $windowH > $footerTop + 100 ){
            $footer.animate({ opacity: 1}, 500);
            $footerBody.animate({ top: 0 }, 500);
        }

    }

    $menuBtn.click(function(){
        if(!menuOpen){
            $menuBtn.addClass('open');
            menuOpen = true; 
        }else {
            $menuBtn.removeClass('open');
            menuOpen = false;
        }
    })

    $btnTop.click(function(){
        if(exist){
            $(window).scrollTop(0);
        }
    })
})
