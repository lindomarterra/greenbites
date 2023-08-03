
//ANIMATION ON TITLE HEADER
window.addEventListener('load', ()=>{

    document.querySelector('.titleBites').classList.add('animationSlideDownOnBites')
    document.querySelector('.titleGreen').classList.add('animationSlideDownOnGreen')
})








//CART
//ADDING PRODUCT
const btn=document.getElementsByClassName('btn')
for(let i=0; i< btn.length; i++){
    btn[i].addEventListener('click', addingProductToCart)    
}


function addingProductToCart(event){

    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

    console.log(productTitle)
}




