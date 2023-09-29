
import './App.css';
import React from 'react';
import { Sidebar } from './Components/Sidebar';
import { Rbody } from './Components/Rbody';

function App() {
  return (
    <>
    <div className="main">
      <Sidebar/>
      <Rbody/>
    </div>
    </>
  );
}

export default App;
