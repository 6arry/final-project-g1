import React from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar';
import Ytplayer from '../components/Ytplayer';

function Home() {
  return (
    <div>
      <h1>This is the Home page!</h1>
      <SearchBar />
      <Ytplayer />
    </div>
  );
}

export default Home;
