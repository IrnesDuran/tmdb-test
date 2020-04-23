import React from 'react';

//Redux
import {connect} from 'react-redux';



const SearchField = (props) => {

    return(
    <div className='my-5'>
        <input 
        className="bg-white focus:outline-none border border-gray-500 focus:border-teal-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="search" placeholder="search results on www.themoviedb.org"
        onChange={props.setSearchField}
        value={props.value}
        ></input>
    </div>
)};

const mapDispatchToProps =  dispatch => {
    return{
        setSearchField: e =>{
            dispatch({type:'SET_SEARCHFIELD', text: e.target.value});
        },
    };
  };
  

export default connect(null, mapDispatchToProps)(SearchField);
