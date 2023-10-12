import "./App.css";
import React from "react";
import { Sidebar } from "./Components/Sidebar";
import { Rbody } from "./Components/Rbody";
import SignUp from "./Components/signup";
// import LandingPage from './pages/landingPage';
import Login from "./Components/LoginPage";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landingPage";
import { DashBody } from "./Components/DashBody";
import WorkEnquiry from "./pages/WorkEnquiry";
import Profile from "./pages/ProfileManagement";
import InvoiceGenerator from "./pages/Invoice";
import Projects from "./pages/Projects";
import Contract from "./Components/Contract";

function App() {
  return (
    <>
      {/* <Route
          path="/user"
          element={
            
          }
        > */}

      <div className="main">
        <Sidebar />
        <Rbody />
      </div>
      <Routes>
        {/* <Route path="/dashboard" element={<DashBody />} />
        <Route path="/workenquiry" element={<WorkEnquiry />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice" element={<InvoiceGenerator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contracts" element={<Contract />} /> */}
        {/* </Route> */}
        {/* <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<LandingPage />}></Route> */}
      </Routes>

      {/* <LandingPage/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
