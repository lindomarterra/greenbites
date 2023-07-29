let banner01=document.getElementById('banner01')
let banner02=document.getElementById('banner02')
let banner03=document.getElementById('banner03')
let banner04=document.getElementById('banner04')
let interval= 4000

function slide1(){
    banner01.classList.add('bannerHide')
    banner02.classList.remove('bannerHide')
    setTimeout('slide2()', interval)
}
function slide2(){
    banner02.classList.add('bannerHide')
    banner03.classList.remove('bannerHide')
    setTimeout('slide3()', interval)
}
function slide3(){
    banner03.classList.add('bannerHide')
    banner04.classList.remove('bannerHide')
    setTimeout('slide4()', interval)
}
function slide4(){
    banner04.classList.add('bannerHide')
    banner01.classList.remove('bannerHide')
    setTimeout('slide1()', interval)
}




/*function mouseOver(){
    document.getElementById('navBar').classList.add('eventScrool')
}
function mouseOut(){
    document.getElementById('navBar').classList.remove('eventScrool')
}*/