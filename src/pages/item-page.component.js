import React, {useEffect, useState} from 'react';

const ItemPage =(props) => {
    const [item, setItem] = useState([]);
    const [videos, setVideos] = useState([]);


      useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.themoviedb.org/3${props.location.pathname}?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US`);
            const dataArray = await res.json();
            const result = await dataArray;
             setItem(result);
        };

        const fetchVideos = async () => {
            const videoResults = await fetch(`https://api.themoviedb.org/3${props.location.pathname}/videos?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US`);
            const videoArray = await videoResults.json();
            const video = await videoArray.results[0];
             setVideos(video);
        };

        fetchData();
        fetchVideos();

      },[]);
      

      //Conditional render, if available, video is being rendered, otherwise poster
      const VideoOrPoster = videos!==undefined ? 
        (<iframe title="youtubelink" width="100%" height="560" src={`https://www.youtube.com/embed/${videos.key}`}>
        </iframe>) 
        : 
        (<img  className="w-full" 
        src={item.poster_path || item.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${item.poster_path || item.backdrop_path}` : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'} alt="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"/>);

    return(
        <div className={videos!==undefined ? "mx-10 md:mx-32 lg:mx-64":"m-20 md:w-1/2 md:m-auto lg:w-1/3" } >
            <div className='arrow my-12 cursor-pointer' onClick={() => props.history.goBack()}>&#10094; Back</div>
                <div className="rounded">{VideoOrPoster}</div>
                <div className='h-16 bg-black text-center hd:text-xl text-teal-400 py-4 font-extrabold tracking-widest uppercase mb-2'>
                    {item.title || item.name}
                </div>
                <div className='text-extrabold text-sm md:text-lg p-4'>Movie overview: <br/>{item.overview}</div>
            </div>
    )

};

export default ItemPage;