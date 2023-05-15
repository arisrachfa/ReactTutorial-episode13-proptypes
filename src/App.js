// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// style
import './App.css';

// pages
import Navbar from './Navbar';
import Home from './Home';
import BioPerson from './Practice/BioPerson';
import BioPersonSafety from './Practice/BioPersonSafety';

function App() {
  return (
    <div className="App">

      <Router>
        <div className='navigation'>
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bioPerson' element={<BioPerson/>}/>
          <Route path='/bioPersonSafety' element={<BioPersonSafety/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
