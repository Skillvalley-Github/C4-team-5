import React from 'react';
import { Header } from './Header';
import { DashBody } from './DashBody';
import '../Components/Rbody.css'

export const Rbody = () => {
  return (
    <>
        <div className="Rbody">
            <Header name = "Sohidur Rahman" overview="Dashboard"/>
            <DashBody/>
        </div>
        
    </>
  )
}
