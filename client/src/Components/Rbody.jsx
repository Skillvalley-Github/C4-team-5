import React from "react";
import { Header } from "./Header";
import { DashBody } from "./DashBody";
import "../Components/Rbody.css";
import { Routes, Route } from "react-router";
import WorkEnquiry from "../pages/WorkEnquiry";
import InvoiceGenerator from "../pages/Invoice";
import Profile from "../pages/ProfileManagement";
import Projects from "../pages/Projects";
import Contract from "./Contract";
import { Sidebar } from "./Sidebar";
import Apply from "../pages/Apply";

export const Rbody = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="Rbody">
        <Header name="Sohidur Rahman" overview="Dashboard" />
        {/* <DashBody/> */}
        <Routes>
          <Route path="/dashboard" element={<DashBody />} />
          <Route path="/workenquiry" element={<WorkEnquiry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/invoice" element={<InvoiceGenerator />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contracts" element={<Contract />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={"page not found"} />
        </Routes>
      </div>
    </>
  );
};
