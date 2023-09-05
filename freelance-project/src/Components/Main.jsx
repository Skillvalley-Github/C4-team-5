import React from 'react';
import "./Main.css";
import Card from './Card';
import SearchBar from './SearchBar';
import Profile from './Profile';

const Main = () => {
  return (
    <div className='main-container'>
        <div className="leftSide_container">
          <SearchBar/>
          <Card/>
        </div>
        <div className="rightSide_container">
         <Profile/>
        </div>
    </div>
  )
}

export default Main