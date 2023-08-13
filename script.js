//HOME
//ANIMATION ON TITLE HEADER
window.addEventListener('load', ()=>{

    document.querySelector('.titleBites').classList.add('animationSlideDownOnBites')
    document.querySelector('.titleGreen').classList.add('animationSlideDownOnGreen')
})


//UNDERLINE ANIMATION ON NAVBAR
function underlineEffect(){
    const addUnderline=document.getElementById('underlineSelected')
    addUnderline.style.cssText= 'color:#222; text-decoration: underline 1px green '

}


const iconCamera=document.getElementsByClassName('bi-camera')
for(let i=0;i<iconCamera.length;i++){
    iconCamera[i].addEventListener('mouseover', showImg)
    iconCamera[i].addEventListener('mouseout', hideImg)
}

function showImg(item){
    const btn=item.target
    const gettingParent=btn.parentElement
    const img=gettingParent.getElementsByClassName('imgProd')[0]

    img.classList.remove("imgProductHide")
}
function hideImg(item){
    const btn=item.target
    const gettingParent=btn.parentElement
    const img=gettingParent.getElementsByClassName('imgProd')[0]
    img.classList.add("imgProductHide")
}






    
    
    














