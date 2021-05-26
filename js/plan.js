// about
let $aboutTop =  new Array();
let $aboutContent = new Array();
let $aboutImg = new Array();

$aboutTop[0] = $(".about:eq(0)").offset().top;
$aboutContent[0] = $(".about:eq(0) .about-content");
$aboutImg[0] = $(".about:eq(0) .about-img");

for(let i = 1; i < 4; i++){
    $aboutContent[i] = $(".about:eq("+i+") .about-content");
    $aboutImg[i] = $(".about:eq("+i+") .about-img");
}

$aboutContent[0].animate({ opacity: 1, left: 0 }, 500);
$aboutImg[0].animate({ opacity: 1,  left: 0 }, 800);

 $(window).scroll(function(){
    scrollFn();
})

function scrollFn () {
    let $windowT = $(window).scrollTop();
    let $windowH = $(window).height();
    
    // animation
    for(let i = 1; i < 4; i++){

        for(let i = 1; i < 4; i++){
            $aboutTop[i] = $(".about:eq("+i+")").offset().top;
        }

        if( $windowT + $windowH > $aboutTop[i] + 250){
            $aboutContent[i].animate({ opacity: 1, left: 0 }, 500);
        }
    
        if( $windowT + $windowH > $aboutTop[i] + 400){
            $aboutImg[i].animate({ opacity: 1,  left: 0 }, 800);
        }

        
    }
}
