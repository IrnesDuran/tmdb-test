import React from 'react';
import ItemCard  from '../item-card/item-card.component';
import { withRouter } from 'react-router-dom';

const ItemsContainer =(props) => {
    return(
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                props.data.filter((item, idx) => idx < 10)
                .map((item) => (<div key={item.id} onClick={() => props.history.push(`${props.searchCategory}/${item.id}`)}><ItemCard item={item}/></div>))
            }
        </div>
    )};

export default withRouter(ItemsContainer);