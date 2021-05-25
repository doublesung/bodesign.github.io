// about
let $aboutTop =  new Array();
let $aboutContent = new Array();
let $aboutImg = new Array();

for(let i = 0; i < 4; i++){
    $aboutTop[i] = $(".about:eq("+i+")").offset().top;
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
        if( $windowT + $windowH > $aboutTop[i] + 250){
            $aboutContent[i].animate({ opacity: 1, left: 0 }, 500);
        }
    
        if( $windowT + $windowH > $aboutTop[i] + 350){
            $aboutImg[i].animate({ opacity: 1,  left: 0 }, 800);
        }
    }
}