import React from 'react';
import ItemCard  from '../item-card/item-card.component';

const ItemsContainer =(props) => {
    return(
        <div className='flex flex-wrap justify-center'>
            <ItemCard test={props.searchCategory}/>
            <ItemCard test={props.searchCategory}/>
            <ItemCard test={props.searchCategory}/>
            <ItemCard test={props.searchCategory}/>
        </div>
    )};

export default ItemsContainer;