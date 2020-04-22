const topMoviesUrl = "https://api.themoviedb.org/3/movie/top_rated";
const browseMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
const topTvShowsUrl = "https://api.themoviedb.org/3//tv/top_rated";
const browseTvShowsUrl = "https://api.themoviedb.org/3/tv/popular";
const apiKey = "addad1e44ebe9bd38c42a7e83a8851a9";

const topMoviesRequest = async() => {
    try {
        const collectionResponse = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1");
        const collection = await collectionResponse.json();
        const topMovies = await collection.results;
        console.log(topMovies);

    } catch (err) {
        console.log('there was an error while fetching from TMDB');
    }
};

export default topMoviesRequest;



// fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=addad1e44ebe9bd38c42a7e83a8851a9&language=en-US&page=1").then(res => res.json()).then(data=> console.log(data.results)).catch(err=> console.log(err));


