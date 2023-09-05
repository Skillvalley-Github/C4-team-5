import React from 'react';
import "./SearchBar.css";
import supabase from '../config/supabaseClient';

const SearchBar = () => {

  console.log(supabase);

  return (
    <div className="searchbar_container">
        <input type="text" name="" id="" />
        <input type="button" value="" />
    </div>
  )
}

export default SearchBar