import './App.css';
import Navbar from '../src/Components/Navbar';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <div className="main">
      <div className="box1"></div>
      <div className="box2">
        <div className="dp"></div>
        <div className="name">Shantanu M.</div>
        <div className="role">Front-End-Developer</div>
        <div className="bartext">Complete your profile</div>
        <div className="bar">
          <div className="bar1">
            <div className="fill"></div>
          </div>
          <div className="per">40%</div>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  );
}

export default App;
