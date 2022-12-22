import react from 'react';
import './App.css';
import About from './components/about';
import Dashboard from './components/dashboard';
import Nav from './components/nav';
import SleepForm from './components/sleepForm';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (

   <Router>
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/about" element={<About/>} /> 
      <Route path="/dashboard" element={<Dashboard/>} /> 
      <Route path="/sleepForm" element={<SleepForm/>} /> 
      </Routes>
    </div>

   </Router>

  );
}

export default App;