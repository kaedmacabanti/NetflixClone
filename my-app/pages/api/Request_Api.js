const $key = "b66ff9114613dbfc6174dc05badbe948";

// genre

const request = {
    
    requestGenres : "https://api.themoviedb.org/3/genre/movie/list?api_key="+$key+"&language=en-US",
    requestPopular : "https://api.themoviedb.org/3/movie/popular?api_key="+$key+"&language=en-US&page=1",
    requestTopRated : "https://api.themoviedb.org/3/movie/top_rated?api_key="+$key+"&language=en-US&page=1",
    requestUpcoming : "https://api.themoviedb.org/3/movie/upcoming?api_key="+$key+"&language=en-US&page=1",
    requestNowPlaying : "https://api.themoviedb.org/3/movie/now_playing?api_key="+$key+"&language=en-US&page=1",
}


export default request

// 'https://api.themoviedb.org/3/genre/movie/list?api_key=b66ff9114613dbfc6174dc05badbe948&language=en-US'