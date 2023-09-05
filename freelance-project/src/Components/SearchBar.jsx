import React from 'react';
import "./SearchBar.css";
import search from "../assets/search.svg";

const SearchBar = () => {
  return (
    <div className="searchbar_container">
        <input type="text" name="" id="" className='input_text'/>
        <button className='search'><img src={search} alt="" srcset="" /></button>
    </div>
  )
}

export default SearchBar