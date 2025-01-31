import React from "react";
import "./App.css";

export default function SearchEngine() {
    return (
        <div className="container-box">
<header>
        <form className='formBox'>
          <input type="text" placeholder="Enter a city..." className='searchBox'/>
          <input type="submit" value="Submit" className='submitBox' />
        </form>
      </header>
        </div>
    )
}