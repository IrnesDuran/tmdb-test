import React, {useState} from 'react';

const SearchField = (props) => {

    // const [searchField, setSearchField] = useState('');

    // console.log(searchField);



    return(
    <div className='my-5'>
        <input 
        className="bg-white focus:outline-none border border-gray-500 focus:border-teal-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="search" placeholder="search results on www.themoviedb.org"
        // onChange= {e=> setSearchField(e.target.value)}
        onChange={props.onValue}
        ></input>
    </div>
)};

export default SearchField;