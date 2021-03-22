import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import ContactsIcon from '@material-ui/icons/Contacts';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Speech from '../images/speech.png'
import ContactIcon from '../images/contact.png'


const Contact = () => {
    return (
        <div className='vision about' id='contact'>
            <section  className='contact-card'>
            <img src={Speech} alt='eye-icon' className='icons'/>

            <h3>Benefit Of Joining the Club</h3>
            <ul style={{listStyleType:'square'}}>
                <li>Impecable public speaking skill</li>
                <li>International exposure to Toastmaster International</li>
                <li>Innate leadership & people management skills </li>
                <li>Unlimited resources for personal growth</li>
                <li>Exposure and good networking opportunities</li>
                <li>Certifications</li>
            </ul>
            </section>
            <div className='contact-card'>
                  <img src={ContactIcon} alt='icon' className='icons'/>
                <h3>Connect with us</h3>
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
               
            <a href='https://www.twitter.com/GavelClubOAU' target='_blank' rel="noreferrer"><TwitterIcon/></a>
            <a href='https://www.instagram.com/GavelClubOAU' target='_blank' rel="noreferrer"><InstagramIcon/></a>
            <a href='https://www.linkedin.com/company/gavel-club-oau/' target='_blank' rel="noreferrer"><LinkedinIcon/></a>
            <a href=' https://wa.me/+2348130731954?text=Hi. i will love to know about the gavel club' target='_blank' rel="noreferrer"><WhatsAppIcon/></a>
            </div>
        </div>

        </div>
    )
}

export default Contact
