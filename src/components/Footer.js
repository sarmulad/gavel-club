import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  const  handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <footer>
            
                 <div className=' footer-card'>
                <h3>Contact us</h3>
                <p>Gavel Club OAU is the first open public speaking club in the OAU. </p>
                <div className='social-icon'>
                 <PhoneIcon/>
                  <a href='tel:08130731954'> 08130731954</a>

                </div>
                <div className='social-icon'>
                    <PhoneIcon/>
                    <a href='tel:08069518268'>08069518268</a>

                </div>
               
              <div className='social-icon' >
                <EmailIcon/>
                <a href='mailto:gavelcluboau@gmail.com'><p>gavelcluboau@gmail.com</p></a>
              </div>
              
                <div className='social'>
               
                <a href='https://www.facebook.com/GavelClubOAU' target='_blank'><FacebookIcon/></a>
                <a href='https://www.twitter.com/GavelClubOAU' target='_blank'><TwitterIcon/></a>
                <a href='https://www.instagram.com/GavelClubOAU' target='_blank'><InstagramIcon/></a>
                <a href='https://www.linkedin.com/GavelClubOAU' target='_blank'><LinkedinIcon/></a>
                <a href=' https://wa.me/+2348130731954?text=Hi. i will love to know about the gavel club' target='_blank'><WhatsAppIcon/></a>
                </div>
            </div>
            <div className='pages'>
                <h3>Pages</h3>
                <ul style={{listStyleType:'none'}}>
                            <li>
                                <a  href = '/'>Home</a>
                            </li>
                            <li>
                            <a href = '#about'>About</a>
                            </li>
                            <li>
                            <a href = '#contact'>Contact us</a>
                            </li>
                            <li>
                            <a href = '#mission'>Mission</a>
                            </li>
                        
                         </ul>
            </div>
            <form>
                <h3>Subscribe to our Newsletter</h3>
                <input type='email' placeholder='Email' className='input'/><br/>
                <button type='submit' className='subscribe-btn' onClick={handleSubmit}>Subscribe</button>
            </form>
        </footer>
        
    )
}

export default Footer
