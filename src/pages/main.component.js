import React, { useState, useEffect } from 'react';

import CustomButton from '../components/custom-button/custom-button.component';
import SearchField from '../components/search-field/search-field.component';
import ItemsContainer from '../components/items-container/items-container.component';





const ContainerComponent = (props) => {
  const [searchField, setSearchField] = useState('');
  const [data, setData] = useState([]);

  const category='movie'; // 'tv' or  'movie'
  const criteria='popular'; //'top_rated' or 'popular'
  const delimitedSearch = searchField.split(' ').join('&');
  
  console.log(props)


useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(searchField.length>3 ? 
    `https://api.themoviedb.org/3/search/${category}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&query=${delimitedSearch}&page=1&include_adult=false&region=EN`
    :
    `https://api.themoviedb.org/3/${category}/${criteria}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`);
    const dataArray = await res.json();
    const results = await dataArray.results;

     setData(results);
  };
  fetchData();
},[searchField]);

  return (
    <div className="mx-10 my-10 md:mx-40">
      <CustomButton activeLink={props.categoryType==='movies'? true:false} searchCategory={'movies'}>Movies</CustomButton>
      <CustomButton activeLink={props.categoryType==='tv-shows'? true:false} searchCategory={'tv-shows'}>TV Shows</CustomButton>
      <SearchField onValue={e=> setSearchField(e.target.value)}/>
      <ItemsContainer data={data}/>
    </div>
  );
}

export default ContainerComponent;
