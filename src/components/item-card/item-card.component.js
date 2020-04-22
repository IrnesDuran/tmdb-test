import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemCard =(props) => {
    // console.log(props)
    return(
        <div className='relative flex-col rounded-lg md:w-1/2 md:h-1/2 align-center' 
        onClick={() => props.history.push('/item')}>
            {/* <div class="absolute m-5 text-4xl text-transparent hover:text-black">TO MOVIE DETAILS</div> */}
            <div className=" m-3 rounded-lg shadow-2xl">
                <div class="rounded hover:opacity-75">
                    <img class="rounded-t-lg w-full" src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="Sunset in the mountains"/>
                </div>
                <div className='h-16 bg-black text-center text-xl text-teal-400 py-4 font-medium tracking-widest rounded-b-lg'>
                    {props.test==='movies'?'MOVIE TITLE':'TV SHOW TITLE'}
                </div>

            </div>
        </div>
    )};

export default withRouter(ItemCard);