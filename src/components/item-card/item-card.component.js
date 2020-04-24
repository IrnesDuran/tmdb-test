import React from 'react';

const ItemCard =(props) => {
    return(
        <div className='flex-col rounded-lg align-center mx-10 shadow-xl overflow-hidden'>
            <div className="rounded-lg shadow-2xl">
                <div className="rounded hover:opacity-75">
                    <img className="rounded-t-lg object-cover w-full" 
                    src={props.item.poster_path || props.item.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${props.item.poster_path || props.item.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>
                </div>
                <div className='h-16 bg-black text-center hd:text-xl text-teal-400 py-4 font-extrabold tracking-widest rounded-b-lg uppercase'>
                    {props.item.title || props.item.name}
                </div>
            </div>
        </div>
    )};

export default ItemCard;


