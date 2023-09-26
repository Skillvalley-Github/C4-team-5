import React from 'react';
import { Header } from './Header';
import { DashBody } from './DashBody';
import '../Components/Rbody.css'
import { Routes, Route } from 'react-router';
import WorkEnquiry from '../pages/WorkEnquiry';
import InvoiceGenerator from '../pages/Invoice';
import Profile from '../pages/ProfileManagement';


export const Rbody = () => {
  return (
    <>
        <div className="Rbody">
            <Header name = "Sohidur Rahman" overview="Dashboard"/>
            {/* <DashBody/> */}
        <Routes>
          <Route path="/" element={<DashBody />} />
          <Route path="/workenquiry" element={<WorkEnquiry />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/invoice" element={<InvoiceGenerator />} />
        </Routes>
        </div>
        
    </>
  )
}
