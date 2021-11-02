const API_KEY ="65e45c80159c1ad31a3c3bd03e8a8fdf";

const Requests = {
    fetchtrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`
}

export default Requests;