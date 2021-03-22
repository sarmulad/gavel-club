import React  from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom"



function App() {
  return (

    <Router>
          <div className='app'>
          <Route path='/' exact component={Home}/>
         </div>
     
  </Router>

  )}

export default App;
