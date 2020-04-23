import React from 'react';
import { withRouter } from 'react-router-dom';


const CustomButton =(props) => {

    const {children,activeLink,category,onSetMovie,...otherProps} = props;
    return(
        <button className={`h-12 w-40 bg-black 
        ${activeLink ? 'text-teal-400 underline' : 'text-white'} 
        text-center text-base uppercase font-medium px-5 mx-1 border-solid border border-black 
        hover:bg-white hover:text-black hover:border-solid hover:border`}
        {...otherProps} 
        //onClick={onSetMovie}
        >
            {children}
        </button>
    )};

export default withRouter(CustomButton);