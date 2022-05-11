//use local storage to manage cart data
//module 47_5-6:
const addToDb = id =>{
    let shoppingCart = {};
   //get item
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    //add item
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
       shoppingCart[id] =1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

//for remove data id from local storage
   const removeFromDb = id =>{
     const storedCart = localStorage.getItem('shopping-cart');
             if(storedCart){
                const shoppingCart = JSON.parse(storedCart);
                 if(id in shoppingCart){
                     delete shoppingCart[id];
                     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
                 }
             }
   }

//for full shopping cart remove from local storage:
   const deleteShoppingCart = () =>{
          localStorage.removeItem('shopping-cart');
   }

   
export {addToDb, removeFromDb, deleteShoppingCart}

//module 47.5-5 ar jonne ata:
/* const addToDb = id =>{ 
    const quantity = localStorage.getItem(id);
    if(quantity){
        //console.log('already exists');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
       // console.log('new item');
        localStorage.setItem(id, 1)
    }
 
}
export {addToDb} */