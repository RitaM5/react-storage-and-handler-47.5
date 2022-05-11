import React, { useEffect, useState } from 'react';
import SingleCosmetic from '../Single-Cosmetic/SingleCosmetic';
//import { add } from '../../utilities/calculate';
//import add from '../../utilities/calculate';

import './Cosmetics.css';
const Cosmetics = () => {
//abar public folder theke nijer custom data.json a data baniye fetch krbo akhane:-
        const [cosmetics, setCosmetics] = useState([]);
        useEffect(() => {
            fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
        },[]);

  //ata ager niyom:-
  /*    const cosmetics = [
        {id: 1, name: 'alta', price: 100},
        {id: 2, name: 'lipstick', price: 200},
        {id: 3, name: 'churi', price: 300},
        {id: 4, name: 'dul', price: 400},
        {id: 5, name: 'fita', price: 500}
    ] */
    return (
        <div>
            <h2>Welcome to my cosmetics store</h2>
            {
                cosmetics.map(cosmetic => <SingleCosmetic cosmetic={cosmetic} 
                key={cosmetic.id}>     
                </SingleCosmetic>)
            }
        </div>
    );
};

export default Cosmetics;

//module 47_5-2 nmbr vdo ar jonne ata:-
/* import React from 'react';
import { add } from '../../utilities/calculate';
//import add from '../../utilities/calculate';
import './Cosmetics.css';
const Cosmetics = () => {
   const first = 56;
   const second = 20;
   const total = add(first, second);
    return (
        <div>
            <h2>Welcome to my cosmetics store</h2>
            <p>total:{total}</p>
        </div>
    );
};

export default Cosmetics; */