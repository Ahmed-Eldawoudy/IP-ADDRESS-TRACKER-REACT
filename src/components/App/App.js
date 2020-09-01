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
      .then(res => res.json())
      .then(json => {
        setIp(json.IPv4)
        setLat(json.latitude)
        setLng(json.longitude)
      })
  }, [])



  function ipfy() {
    const data = fetch(`https://geo.ipify.org/api/v1?apiKey=at_neIMwcRQ5BZdbXcWbAluuZpwZHwV6&ipAddress=${ip}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        return jsonResponse
      })
    return data
  }

 async function locationInfo() {
    await ipfy().then(data => setData({ ...data }))
  }

  const location = { ...data.location };
  console.log(location)



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
          <IpInfo ip={data.ip} location={location.region} timezone={location.timezone} isp={data.isp} />
        </section>
        <section className='map'><MapLeaflet lat={lat} lng={lng}/></section>
      </main>
    </div>
  );
}

export default App;
