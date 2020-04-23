import React, { useState, useEffect } from 'react';

import CustomButton from '../components/custom-button/custom-button.component';
import SearchField from '../components/search-field/search-field.component';
import ItemsContainer from '../components/items-container/items-container.component';





const ContainerComponent = (props) => {
  const [searchField, setSearchField] = useState('');
  const [data, setData] = useState([]);
  const [isMovie, setIsMovie] = useState('tv');

  //const category='tv'; // 'tv' or  'movie'
  const delimitedSearch = searchField.split(' ').join('&');
  
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(searchField.length>3 ? 
    `https://api.themoviedb.org/3/search/${isMovie}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&query=${delimitedSearch}&page=1&include_adult=false&region=EN`
    :
    `https://api.themoviedb.org/3/${isMovie}/top_rated?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`);
    const dataArray = await res.json();
    const results = await dataArray.results;

     setData(results);
  };
  fetchData();
},[searchField,isMovie]);

//console.log(sessionStorage.getItem('searchTerm'));

  return (
    <div className="mx-10 my-10 md:mx-40">
      <CustomButton activeLink={isMovie==='movie'? true:false} category={isMovie} onClick={() => setIsMovie('movie')}>Movies</CustomButton>
      <CustomButton activeLink={isMovie==='tv'? true:false} category={isMovie} onClick={() => setIsMovie('tv')}>TV Shows</CustomButton>
      <SearchField onValue={e=> {setSearchField(e.target.value); sessionStorage.setItem('searchTerm',e.target.value );}} value={searchField}/>
      <ItemsContainer data={data} searchCategory={isMovie}/>
    </div>
  );
}

export default ContainerComponent;
