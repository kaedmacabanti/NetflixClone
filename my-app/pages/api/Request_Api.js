const $key = "b66ff9114613dbfc6174dc05badbe948";

const request = {
    //genres
    requestGenres : "https://api.themoviedb.org/3/genre/movie/list?api_key="+$key+"&language=en-US",

    //home
    requestUpcomingMovies : "https://api.themoviedb.org/3/movie/upcoming?api_key="+$key+"&language=en-US&page=1", //Movies repeated
    requestTopRatedMovies : "https://api.themoviedb.org/3/movie/top_rated?api_key="+$key+"&language=en-US&page=1",  //Movies Repeated
    requestOnAirTv : "https://api.themoviedb.org/3/tv/popular?api_key="+$key+"&language=en-US&page=1",  // Tv Shows repeated
    requestTopRatedTv : "https://api.themoviedb.org/3/tv/top_rated?api_key="+$key+"&language=en-US&page=1", // Tv Shows repeated
 
    //movies
    requestPopular : "https://api.themoviedb.org/3/movie/popular?api_key="+$key+"&language=en-US&page=1", //looped for header
    requestTopRated : "https://api.themoviedb.org/3/movie/top_rated?api_key="+$key+"&language=en-US&page=1",
    requestUpcoming : "https://api.themoviedb.org/3/movie/upcoming?api_key="+$key+"&language=en-US&page=1",
    requestNowPlaying : "https://api.themoviedb.org/3/movie/now_playing?api_key="+$key+"&language=en-US&page=1",

    //tvShows
    requestTvPopular : "https://api.themoviedb.org/3/tv/popular?api_key="+$key+"&language=en-US&page=1", //looped for header
    requestTvAiringToday : "https://api.themoviedb.org/3/tv/airing_today?api_key="+$key+"&language=en-US&page=1", 
    requestTvOnAir : "https://api.themoviedb.org/3/tv/on_the_air?api_key="+$key+"&language=en-US&page=1", 
    requestTvTopRated : "https://api.themoviedb.org/3/tv/top_rated?api_key="+$key+"&language=en-US&page=1", 

}


export default request
