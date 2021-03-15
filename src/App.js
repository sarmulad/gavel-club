import React, {useEffect, UseEffect, useState}  from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Mission from './components/Mission'

import Contact from './components/Contact'

import NavBar from './components/NavBar'
import Excos from './components/Exco'
import Carousel from './components/Carousel'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './components/Footer'



function App() {
  return (

    <Router>
          <div className='app'>
          <NavBar/>
          
          <Hero/>
          <About/>
          <Mission/>
          <Vision/>
          <Contact/>
          <Excos/>
          <Footer/>
        </div>
     
  </Router>

  )}

export default App;
