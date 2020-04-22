import React from 'react';
import ItemCard  from '../item-card/item-card.component';

const ItemsContainer =(props) => {
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            {
                props.data.filter((item, idx) => idx < 10)
                .map((item) => (<div key={item.id} ><ItemCard item={item}/></div>))
            }
        </div>
    )};

export default ItemsContainer;