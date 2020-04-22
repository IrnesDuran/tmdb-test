import React from 'react';
import { withRouter } from 'react-router-dom';


const ItemCard =(props) => {
    //console.log(props.item);
    return(
        <div className='flex-col rounded-lg align-center mx-24 shadow-xl overflow-hidden' 
        onClick={() => props.history.push('/item')}>
            <div className="rounded-lg shadow-2xl">
                <div className="rounded hover:opacity-75">
                    <img className="rounded-t-lg object-cover w-full" 
                    src={`https://image.tmdb.org/t/p/w1280/${props.item.poster_path || props.item.backdrop_path}`} alt="Sunset in the mountains"/>
                </div>
                <div className='h-16 bg-black text-center hd:text-xl text-teal-400 py-4 font-extrabold tracking-widest rounded-b-lg uppercase'>
                    {props.item.title || props.item.name}
                </div>
            </div>
        </div>
    )};

export default withRouter(ItemCard);