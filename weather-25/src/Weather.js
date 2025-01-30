
import './App.css';
import React, {useState}from 'react';
import axios from "axios";

function Weather(props) {
  const [city, setCity] = useState("");
  const [display, setDisplay] = useState(false);
  function submit(event) {
    event.preventDefault()
    setDisplay()
  }
  

  let apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
  let apiUrl = "https://api.shecodes.io/weather/v1/current?query={query}&key={apiKey}"
  axios.get(apiUrl).then(getWeather)
  
  
  return (
   <div class="container">
      <header>
        <form className='formBox'>
          <input type="text" placeholder="Enter a city..." className='searchBox'/>
          <input type="submit" value="Submit" className='submitBox' />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city"> Rome </h1>
            <p className="details">
              <span className="date-time"> Saturday 16:00 </span>, sunny<br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="temperature-icon">☀︎</span>
            <span className="current-temperature-value">13</span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p
          >This project was coded by
          <a href="#" target="_blank"> Coleene Acevedo</a> and is
          <a href="#" target="_blank"> on GitHub</a> and
          <a href="#" target="_blank">hosted on Netlify</a>
        </p>
      </footer>
    </div>
  );
}

export default Weather;
