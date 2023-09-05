import "./App.css";
import Navbar from "../src/Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes, Route} from "react-router-dom";
import Messages from "./pages/messages";
import FindWork from "./pages/adminPanel/findWork";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/findWork" element={<FindWork />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
