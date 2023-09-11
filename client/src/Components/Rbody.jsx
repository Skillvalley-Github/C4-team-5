import React from 'react';
import { Header } from './Header';
import { DashBody } from './DashBody';

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
