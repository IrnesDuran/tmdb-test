import React, { useState, useEffect } from 'react';

import CustomButton from '../components/custom-button/custom-button.component';
import SearchField from '../components/search-field/search-field.component';
import ItemsContainer from '../components/items-container/items-container.component';

//import useFetch  from '../TMDBAPI/usefetch.hook';

//import topMoviesRequest from '../TMDBAPI/tmdb-api';




const ContainerComponent = (props) => {
  const [searchField, setSearchField] = useState('');
  const [data, setData] = useState([]);

  const category='movie';
  const criteria='top_rated';

//const ut = useFetch('movie','top_rated');
//const tv = useFetch('tv','top_rated');
//console.log(ut);
//console.log(tv);


//WORKING
// useEffect(() => {
  
//   fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1")
//   .then(res => res.json()).then(data=> console.log(data.results[3].title)).catch(err=> console.log(err))

// },[]);


//WORKING
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/${category}/${criteria}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`);
    const dataArray = await res.json();
    const results = await dataArray.results;

     setData(results);

    //console.log(data)

  };
  fetchData();
},[]);

  console.log(data);

  // console.log(searchField);
  //console.log(props.categoryType);
  //console.log(props.categoryType)

  return (
    <div className="mx-10 my-10 md:mx-40">

      {
        data.filter((item, idx) => idx < 10)
        .map((item) => (<div>{item.title}</div>)
          
        )}
      <CustomButton activeLink={props.categoryType==='movies'? true:false} searchCategory={'movies'}>Movies</CustomButton>
      <CustomButton activeLink={props.categoryType==='tv-shows'? true:false} searchCategory={'tv-shows'}>TV Shows</CustomButton>
      <SearchField onValue={e=> setSearchField(e.target.value)}/>
      <ItemsContainer searchCategory={props.categoryType}/>
    </div>
  );
}

export default ContainerComponent;
