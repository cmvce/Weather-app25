import logo from './logo.svg';
import './App.css';

function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type='text' placeholder='Enter city...' />
        <input type='submit' value="Search" />
      </form>
    </div>
  );
}

export default Weather;
