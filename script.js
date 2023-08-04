//HOME
//ANIMATION ON TITLE HEADER
/*window.addEventListener('load', ()=>{

    document.querySelector('.titleBites').classList.add('animationSlideDownOnBites')
    document.querySelector('.titleGreen').classList.add('animationSlideDownOnGreen')
})
*/








//MENU
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
    
    const myObj = {
            name: productTitle, 
            price: productPrice, 
            image: productImage,
            qtd:1
        }
    const myJSON = JSON.stringify(myObj)
    localStorage.setItem("prodAddedCart", myJSON)
    window.location='index(cart).html'    
   
}







