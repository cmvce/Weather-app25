import React, {useState} from "react";
import "./App.css";
import axios from "axios";

export default function SearchEngine() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function showWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${
                response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description
        })
    }

    function submit(event) {
        event.preventDefault();
    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
  const apiUrl = "https://api.shecodes.io/weather/v1/current?query={query}&key={apiKey}"
  axios.get(apiUrl).then(showWeather)
  
        function updateCity(event) {
      setCity(event.target.value)
  }
    }
    return (
        <div className="container-box">
<header>
        <form className='formBox'>
          <input type="text" placeholder="Enter a city..." className='searchBox w-50'/>
          <input type="submit" value="Submit" className='submitBox' />
        </form>
      </header>
        </div>
    )
}