import React from 'react'
import Eye from '../images/eye.png'
import Value from '../images/value.png'

const Vision = () => {
    return (
        <section className='vision about ' id='vision'>
            <section className='card' >
            <img src={Value} alt='value-icon' className='icons'/>

                <h3>OUR CORE VALUES</h3>
                <ul style={{listStyleType:'square'}}>
                    <li>Integrity</li>
                    <li>Service</li>
                    <li>Respect </li>
                    <li>Excellence</li>

                </ul>
           </section>
            <section  className='card'>
            <img src={Eye} alt='eye-icon' className='icons'/>
                <h3>VISION STATEMENT</h3>
                <p >To empower individuals to become more effective communicators and leaders.</p>
            </section>
            
           
     </section>
    )
}

export default Vision
