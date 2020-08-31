import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import IpInfo from '../IpInfo/IpInfo'
import MapLeaflet from '../MapLeaflet/MapLeaflet'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>IP Address Tracker</h1>
        <div className='searchBar'>
          <SearchBar />
        </div>
      </header>
      <main>
        <section className='ip-info'>
          <IpInfo />
        </section>
        <section className='map'><MapLeaflet /></section>
      </main>
    </div>
  );
}

export default App;
