import React,{useEffect, useRef} from 'react'
import '../App.scss';
import {Link} from 'react-router-dom'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import {TweenMax, TimelineLite, Power3,} from 'gsap'

// import Boy from '../images/1.jpg'
// import Girl from '../images/6.jpg'
const Hero = () => {
    // let app = useRef(null)
    // let images =useRef(null)
    // let content =useRef(null)
    // let tl = new TimelineLite({delay:.8})

    // useEffect(() => {
    //   //images ref
    //   const girlImage = images.firstElementChild;
    //   const boyImage = images.lastElementChild;

    //   // content var
    //   const headlineFirst = content.children[0].children[0]
    //   const headlineSecond = headlineFirst.nextSibling
    //   const headlineThird = headlineSecond.nextSibling
    //   const contentP = content.children[1]
    //   const button = content.children[2]




    //   TweenMax.to(app, 0, {css:{visibility:'visible'}})
    //   tl.from(girlImage, 1.2, {y:1280,opacity:0, ease:Power3.easeOut}, 'Start')
    //     .from(girlImage.firstElementChild, 2,{scale:1.6, ease:Power3.easeOut}, 0.2)
    //     tl.from(boyImage, 1.2, {y:1280, opacity:0, ease:Power3.easeOut},0.5)
    //     .from(boyImage.firstElementChild, 2,{scale:1.6, ease:Power3.easeOut}, 0.2)

    //     // text animation

    //     tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children],1,{
    //       y:440,
    //       opacity:0,
    //       ease:Power3.easeOut,
    //       delay:.8
    //     }, .2, 'Start')
    //     .from(contentP, 1, {y:44, opacity:0, ease:Power3.easeOut}, 1.6)
    //     .from(button, 1, {y:44, opacity:0, ease:Power3.easeOut}, 1.8)
    // },[tl])
    // return (
    //     <div className="hero" ref = {el=> app=el}>
    //         <div className='container'>
    //         <div className='hero-inner'>
    //             <div className='hero-content'>
    //             <div className='hero-content-inner' ref={el=>content= el}>
    //                 <h1>
    //                     <div className='hero-content-line'>
    //                     <div className='hero-content-line-inner'>Living a life</div>
    //                     </div>
    //                     <div className='hero-content-line'>
    //                     <div className='hero-content-line-inner'>of tranquility</div>
    //                     </div>
    //                     <div className='hero-content-line'>
    //                     <div className='hero-content-line-inner'>is the end goal</div>
    //                     </div>
    //                 </h1>
    //                 <p>The  goal is  not always to seek happiness.
    //                 what happens at the time of adversity. </p>
    //                 <div className='btn-row'>
    //                     <button className='explore-btn'>
    //                         explore
    //                     </button>
    //                 </div>
    //             </div>
    //             </div>
    //             <div className='hero-images'>
    //                 <div className='hero-images-inner' ref={el=>images= el}>
    //                     <div className='hero-image girl'>
    //                         <img src={Girl} alt='pics'/>
    //                     </div>
    //                     <div className='hero-image boy'>
    //                         <img src={Boy} alt='pics'/>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>
    // </div>,
    // )


    return(
        <header className='hero'>
            <section className='hero-header-text'>
                <h1 className='hero-h' style={{fontWeight:'700',fontSize:'60px'}}>Are you an <span style={{color:'rgb(255, 111, 255)',}}>OAU student</span> ? </h1>
                <p style={{marginBottom:'5px'}}>Do you want to develop the necessary skills needed for you to deliver an excellent speech? </p>
                <p style={{fontSize:'12px'}}>Gavel Club is the place to be !</p>
               
               <a href='#about'> <button className='btn'><div style={{display:'flex', alignItems:'center'}}>Look no further <ArrowRightAltIcon/></div></button></a>
            </section>
        </header>
    )

}

export default Hero
