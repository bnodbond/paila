
let carts=document.querySelectorAll('.addtocart');

let products=[
    {
        name:'shoe 1',
        tag:'men1',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 2',
        tag:'men2',
        price: 3000,
        inCart:0,
    },
    {
        name:'shoe 3',
        tag:'men3',
        price: 1000,
        inCart:0,
    },
    {
        name:'shoe 4',
        tag:'men4',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 5',
        tag:'men5',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 6',
        tag:'men6',
        price: 3000,
        inCart:0,
    },
    {
        name:'shoe 7',
        tag:'men7',
        price: 1000,
        inCart:0,
    },
    {
        name:'shoe 8',
        tag:'men8',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 9',
        tag:'men9',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 10',
        tag:'women1',
        price: 3000,
        inCart:0,
    },
    {
        name:'shoe 11',
        tag:'women2',
        price: 1000,
        inCart:0,
    },
    {
        name:'shoe 12',
        tag:'women3',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 13',
        tag:'women4',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 14',
        tag:'women5',
        price: 3000,
        inCart:0,
    },
    {
        name:'shoe 1',
        tag:'women6',
        price: 3000,
        inCart:0,
    },
    {
        name:'shoe 16',
        tag:'women7',
        price: 1000,
        inCart:0,
    },
    {
        name:'shoe 17',
        tag:'women8',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 18',
        tag:'women9',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 19',
        tag:'kids1',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 20',
        tag:'kids2',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 21',
        tag:'kids3',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 22',
        tag:'kids4',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 23',
        tag:'kids5',
        price: 2000,
        inCart:0,
    },
    {
        name:'shoe 24',
        tag:'kids6',
        price: 2000,
        inCart:0,
    },


]

for(let i=0;i<carts.length; i++){
   carts[i].addEventListener('click',()=>{
      cartNumbers(products[i]);
      totalCost(products[i]);
   })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.update span').textContent=productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        
        document.querySelector('.update span').textContent=productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.update span').textContent=1;
    }
  setItem(product);

}

function setItem(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    
    if(cartItems!=null){

        if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }

        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart=1;
        cartItems={
        [product.tag]:product
    }
   
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    
    let cartCost =localStorage.getItem('totalCost');
   
   if (cartCost !=null){
        cartCost=parseInt(cartCost);
       localStorage.setItem("totalCost",cartCost+product.price);
   } 
   else{
       localStorage.setItem("totalCost",product.price);
   }
   
  
}
function displayCart(){

    let cartItems=localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);
    console.log(cartItems)
  let productContainer=document.querySelector(".productss");
  let cartCost =localStorage.getItem('totalCost');
  if (cartItems && productContainer){
     
      productContainer.innerHTML='';
      Object.values(cartItems).map (item => {
        productContainer.innerHTML +=`
        <div class ="producta">
        
       <button type="button" class="butt">Remove</button>
        <img src="./img/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
        <div class="price">Rs. ${item.price}</div>
        <div class="quantity"><i class="fas fa-angle-left px-3 "></i> <span> ${item.inCart} </span>  <i class="fas fa-angle-right px-3"></i></div>
      
       <div class="total">${item.price*item.inCart}</div>
       

       `
       
     
      });
      
      productContainer.innerHTML += `
      <div class="basket">
      <h5 class="basketTotalTitle">
      Cart Total
      <h5>
     
      <h5 class="basketTotal">
      Rs. ${cartCost}</h5>
      </div>
    
      `
      var removeCartItemButtons=document.getElementsByClassName('butt')
      console.log(removeCartItemButtons)
       for (i=0; i<removeCartItemButtons.length;i++){
     var button=removeCartItemButtons[i]
    
     button.addEventListener('click',removeFromCart);
      
     }  
  }
  
 

  }
  
 function removeFromCart(e){
     e.target.parentElement.parentElement.remove();
 }
  
onLoadCartNumbers();
displayCart();
