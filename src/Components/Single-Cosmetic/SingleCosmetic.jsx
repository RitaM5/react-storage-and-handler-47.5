import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/Fakedb';
import './SingleCosmetic.css'
const SingleCosmetic = (props) => {
    const {name, id, price, picture} = props.cosmetic;

     const addToCart = (id) =>{
         //console.log('add item', id)
         addToDb(id);
     }

     const addToCartWithParam = () => addToCart(id);
   //event handler ar 2 ti niyom dekhano hoice.(button a)
     
     const removeFormCart = id =>{
          removeFromDb(id);
         // deleteShoppingCart();
     }

    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>price: ${price}</p>
            <img src={picture}/>
            <p><small>it has id: {id}</small></p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={()=>removeFormCart(id)}>Remove</button>

            <button onClick={() => addToCart(id)}>Purchase</button>
        </div>
    );
};

export default SingleCosmetic;