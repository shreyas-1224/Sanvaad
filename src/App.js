import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return(
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/sanvaad/home' element={<Home />} />
          <Route exact path='/sanvaad/convert' element={<Convert />} />
          <Route exact path='/sanvaad/learn-sign' element={<LearnSign />} />
          <Route exact path='*' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;