
//ANIMATION ON TITLE HEADER
window.addEventListener('load', ()=>{

    document.querySelector('.titleBites').classList.add('animationSlideDownOnBites')
    document.querySelector('.titleGreen').classList.add('animationSlideDownOnGreen')
})



//SCROOL EVENT
function mouseOver(){
    document.getElementById('navBar').classList.add('eventShowHideNavbar')
}
function mouseOut(){
    document.getElementById('navBar').classList.remove('eventShowHideNavbar')
}