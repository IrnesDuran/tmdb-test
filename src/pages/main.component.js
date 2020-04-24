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



// import React, {useEffect, useState} from 'react';

// const ItemPage =(props) => {
//     const [item, setItem] = useState([]);
//     const [videos, setVideos] = useState([]);


//       useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch(`https://api.themoviedb.org/3${props.location.pathname}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US`);
//             const dataArray = await res.json();
//             const result = await dataArray;
//              setItem(result);
//         };

//         const fetchVideos = async () => {
//             const videoResults = await fetch(`https://api.themoviedb.org/3${props.location.pathname}/videos?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US`);
//             const videoArray = await videoResults.json();
//             const video = await videoArray.results[0];
//              setVideos(video);
//         };

//         fetchData();
//         fetchVideos();

//       },[]);

//       console.log(props);

//       //Conditional render, if available, video is being rendered, otherwise poster
//       const VideoOrPoster = videos!==undefined ? 
//         (<iframe height="100%" width="100%" src={`https://www.youtube.com/embed/${videos.key}`}>
//         </iframe>) 
//         : 
//         (<img className="w-full" 
//         src={item.poster_path || item.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${item.poster_path || item.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>);


//         return(
//         <div className="mx-auto my-24" style={videos!==undefined ?{display: "block", width:"80%"}:null}>
//             <div className='arrow my-12 cursor-pointer p-24' onClick={() => props.history.goBack()}>&#10094; Back</div>
//                 <div className="rounded ">{VideoOrPoster}</div>
//                 <div className='h-16 bg-black text-center hd:text-xl text-teal-400 py-4 font-extrabold tracking-widest uppercase mb-16'>
//                     {item.title || item.name}
//                 </div>
//                 <div className='text-extrabold text-sm md:text-xl p-4'>Movie overview: <br/>{item.overview}</div>
//             </div>
//     )

// };

// export default ItemPage;
