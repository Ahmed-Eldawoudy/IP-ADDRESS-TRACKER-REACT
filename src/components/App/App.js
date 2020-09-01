import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import IpInfo from '../IpInfo/IpInfo'
import MapLeaflet from '../MapLeaflet/MapLeaflet'

function App() {

  const [ip, setIp] = useState(null);
  const [data, setData] = useState({})
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)


  function handleSearch(event) {
    setIp(event.target.value)
  }


  useEffect(() => {
    fetch('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Request failed!')
      }, networkError => console.log(networkError.message))
      .then(json => {
        setIp(json.IPv4)
      })
  }, [])



  function ipfy() {
    const data = fetch(`https://geo.ipify.org/api/v1?apiKey=at_ufBBaLzco7Wwjkf7euZvBf6osvxrR&ipAddress=${ip}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Request failed! Note: You must enter a valid IP address for more info please visit (https://docs.oracle.com/cd/E19504-01/802-5753/planning3-18471/index.html)')
      }, networkError => console.log(networkError.message))
      .then(jsonResponse => {
        return jsonResponse
      })
    return data
  }

  async function locationInfo() {
    await ipfy().then(data => {
      setData({ ...data })
      setLat(data.location.lat)
      setLng(data.location.lng)
    })
  }

  const location = { ...data.location };



  return (
    <div className="App">
      <header className='header'>
        <h1>IP Address Tracker</h1>
        <div className='searchBar'>
          <SearchBar onSearch={handleSearch} onClick={locationInfo} />
        </div>
      </header>
      <main>
        <section className='ip-info'>
          <IpInfo ip={data.ip} location={location.region} city={location.city} timezone={location.timezone} isp={data.isp} />
        </section>
        <section className='map'><MapLeaflet lat={lat} lng={lng} /></section>
      </main>
    </div>
  );
}

export default App;
