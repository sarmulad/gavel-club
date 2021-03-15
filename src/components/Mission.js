import React, {useEffect, useRef} from 'react'
import MissionImage from '../images/presentation.jpg'
import {gsap, Power3,Power2, } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Img from '../images/1.jpg'
// import Img2 from '../images/6.jpg'

import './About.scss'
// import { Power2 } from 'gsap/gsap-core';
const Mission = () => {

    let image = useRef(null)
      let text = useRef(null)

      // let tl = gsap.timeline({
      //      scrollTrigger:
      //      {
      //       trigger:text,
      //       // start:'20px 40%',
      //       // scrub:true,
      //       // toggleActions: 'restart pause reverse pause'
      //   }
      // })
    useEffect(() => {
        const myImage = image.firstElementChild;
           gsap.registerPlugin(ScrollTrigger)

      gsap.from(myImage,  {scrollTrigger:{
          trigger:myImage,
          // start:'20px 80%',
          //  scrub:true,
          // toggleActions: 'restart pause reverse pause'
      }, x:700, duration:2, opacity:0,  ease:Power3.easeOut }, 'START')
      
        gsap.from(text, {scrollTrigger:{
          trigger:text,
          //  start:'20px 30%',

        },opacity:0, x:-300, zIndex:0, duration:1.5, ease:Power2.easeOut},)

    })
    // return (
    //     <div className='about'>
    //        <h1 className='head'>About us</h1>
    //        <div className='about-inner'>
    //             <div className='about-inner-image' ref={el=>image=el}>
    //                 <img src={Img} alt='About-img'/>
    //             </div>
    //             <div className='about-inner-text'>       
    //                 <p>
    //                     <div className='about-content-line'ref={el=>text=el}>
    //                     <div className='about-content-line-inner'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>
    //                     </div>
    //                     <div className='about-content-line'>
    //                       <div className='about-content-line-inner'>using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</div>
    //                     </div>
    //                     <div className='about-content-line'>
    //                       <div className='about-content-line-inner'>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</div>
    //                     </div>
    //                 </p>
                
    //             </div>

    //        </div>
    //     </div>
    // )
    return(
      <section id='mission' style={{backgroundColor:'white',padding:'30px 0px'}}>
      <section className='about'>         
          
            <div ref={el=>text=el}>
            <h1 style={{marginBottom:'20px'}}>MISSION STATEMENT</h1>

             <p >We empower students of the OAU community to become more effective communicators 
             and leaders. We provide a supportive and positive learning experience in which members
              are empowered to develop communication and leadership skills, resulting in greater self-confidence and personal growth.</p>
            </div>
            <div className='about-image' ref={el=>image=el}>
            <img src={MissionImage} alt='about-img'/>
          </div>
      </section>
      </section>
    )
   
}

export default Mission
