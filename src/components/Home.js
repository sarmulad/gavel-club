import React  from 'react'
import Hero from './Hero'
import About from './About'
import Vision from './Vision'
import Mission from './Mission'
import Contact from './Contact'
import NavBar from './NavBar'
import Excos from './Exco'
import Footer from './Footer'


function Home() {
    return (
              <div >
              <NavBar/>
              <Hero/>
              <About/>
              <Mission/>
              <Vision/>
              <Contact/>
              <Excos/>
              <Footer/>
            </div>
         
     
    
      )
}
export default Home