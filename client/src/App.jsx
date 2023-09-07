import "./App.css";
import Navbar from "../src/Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Messages from "./pages/messagingService/messages";
import FindWork from "./pages/adminPanel/findWork";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/findWork" element={<FindWork />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
