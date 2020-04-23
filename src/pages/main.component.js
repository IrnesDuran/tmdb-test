import React, { useState, useEffect } from 'react';
//Redux
import {connect} from 'react-redux';


//Components
import CustomButton from '../components/custom-button/custom-button.component';
import SearchField from '../components/search-field/search-field.component';
import ItemsContainer from '../components/items-container/items-container.component';

//Actions
import {setToMovie, setToTv} from '../store/actions';


const ContainerComponent = (props) => {
  const [data, setData] = useState([]);

  const delimitedSearch = props.search.split(' ').join('%20');
  
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch(props.search.length>2 ? 
    `https://api.themoviedb.org/3/search/${props.category}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&query=${delimitedSearch}&page=1&include_adult=false`
    :
    `https://api.themoviedb.org/3/${props.category}/top_rated?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1`);
    const dataArray = await res.json();
    const results = await dataArray.results;

     setData(results);
  };
  fetchData();
},[props.search,props.category]);

  return (
    <div className="mx-10 my-10 md:mx-40">
      <CustomButton activeLink={props.category==='movie'? true:false}  onClick={props.setToMovie}>Movies</CustomButton>
      <CustomButton activeLink={props.category==='tv'? true:false}  onClick={props.setToTv}>TV Shows</CustomButton>
      <SearchField value={props.search}/>
      <ItemsContainer data={data} searchCategory={props.category}/>
    </div>
  );
}


const mapStateToProps = state => {
  return{
    category:state.control.category,
    search:state.control.searchField
  };
};

const mapDispatchToProps =  dispatch => {
  return{
  setToMovie: () => dispatch(setToMovie()),
  setToTv: () => dispatch(setToTv()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponent);
