import React from 'react';
import './App.css';
import Row from './Row';
import Requests from './Requests';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl ={Requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl = {Requests.fetchtrending} />
      <Row title="Top Rated" fetchUrl = {Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl = {Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl = {Requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
