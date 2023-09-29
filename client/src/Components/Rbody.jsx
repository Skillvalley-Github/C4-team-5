import React from 'react';
import { Header } from './Header';
import { DashBody } from './DashBody';
import '../Components/Rbody.css'
import { Routes, Route } from 'react-router';
import WorkEnquiry from '../pages/WorkEnquiry';
import InvoiceGenerator from '../pages/Invoice';
import Profile from '../pages/ProfileManagement';
import Projects from '../pages/Projects';
import Contract from './Contract';
import Landingpage from './landingpage';

export const Rbody = () => {
  return (
    <>
        <div className="Rbody">
            <Header name = "Sohidur Rahman" overview="Dashboard"/>
            {/* <DashBody/> */}
        <Routes>
         
          <Route path="/dashboard" element={<DashBody />} />
          <Route path="/workenquiry" element={<WorkEnquiry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/invoice" element={<InvoiceGenerator />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contracts" element={<Contract />} />
        </Routes>
        </div>
        
    </>
  )
}
