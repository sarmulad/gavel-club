import React,{useEffect, useRef} from 'react'
import {TweenMax, TimelineLite, Power3,} from 'gsap'


const Loading = () => {
    let animate = useRef(null)
    let tl = new TimelineLite({delay:.8})

 useEffect(()=>{
    const text = animate.firstElementChild;

      const headlineFirst = animate.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling


    TweenMax.to(animate, 0, {css:{visibility:'visible'}})
    // tl.from(text, {y:120, delay:1, opacity:0, ease:Power3.easeOut},)
    
    tl.staggerFrom([headlineFirst.children, headlineSecond.children],1,{
        y:44,
        opacity:0,
        ease:Power3.easeOut,
        delay:.8
      }, .8,)
},[tl])
    return (
        <div  ref={el=>animate=el} className='loading'>
            <div>
                <div> 
                    <h1 >The gavel club oau</h1> 
                </div>
                <div>
                    <p>An affilate of toastmaster international</p>
                </div>
            </div>
        </div>
    )
}

export default Loading
