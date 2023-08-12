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

    iconCamera[i].addEventListener('click', ()=>{

        const imgEachProduct= iconCamera[i].getElementById('imgProd')[0]
        imgEachProduct.classList.remove('imgProductHide')

    })
}


    
    
    














