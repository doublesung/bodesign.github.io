// header
let $carousel =  $(".header .content");
let $video = $(".header video");
// about
let $aboutTop = $(".about").offset().top;
let $aboutContent = $(".about-content");
let $aboutImg = $(".about-img");
// recommened
let $recommendTop = $(".recommend").offset().top;
let $recommendTitle = $(".recommend .titles");
let $recommendBox = $(".recommend-box");
// member 
let $memberTop = $(".member").offset().top;
let $memberContent = $(".member-content");
let $memberImg = $(".member-img");
// plan
let $planTop = $(".plan-wrapper").offset().top;
let $planBox = $(".plan-box");

// onload over
function loadOver (){
    $carousel.animate({ right: "5vw", opacity: 1 }, 1000);
    
    $video.animate({ opacity: 1 }, 1000);
}

loadOver ();

$(window).scroll(function(){
    scrollFn();
})

function scrollFn () {
    let $windowT = $(window).scrollTop();
    let $windowH = $(window).height();

    // animation
    if( $windowT + $windowH > $aboutTop + 250){
        $aboutContent.animate({ opacity: 1, left: 0 }, 500);
    }

    if( $windowT + $windowH > $aboutTop + 350){
        $aboutImg.animate({ opacity: 1,  left: 0 }, 800);
    }
    
    if( $windowT + $windowH > $recommendTop + 250){
        $recommendTitle.animate({ opacity: 1, left: 0 }, 500); 
    }

    if( $windowT + $windowH > $recommendTop + 450){
        $recommendBox.animate({ opacity: 1, top: 0}, 500); 
    }

    if( $windowT + $windowH > $memberTop + 250 ){
        $memberContent.animate({ opacity: 1, left: 0}, 500);
    }

    if( $windowT + $windowH > $memberTop + 550 ){
        $memberImg.animate({ opacity: 1}, 500); 
    }

    if( $windowT + $windowH > $planTop + 350 ){
        $planBox.animate({ opacity: 1, top: 0}, 800);
    }
}

