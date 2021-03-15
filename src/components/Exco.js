import React from 'react'
import Tobi from '../images/Tobi.jpg'
import Success from '../images/success.jpg'
import Dami from '../images/Dami.jpg'
import Taiwo from '../images/Taiwo.jpg'
import Daniel from '../images/daniel.jpg'
import Sonia from '../images/sonia.jpg'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';

const Exco = () => {
    return (
        <section className='exco'>
          <h2 style={{textAlign:'center', marginBottom:'15px'}}> Meet Our Executives</h2>
          <div className='exco-profile'>
                <div className='exco-inner'>
                    <img src={Tobi} alt='image1' className='profileImg'/>
                    <div className='exco-text'>

                    <h4>Apanishile Oluwatobi</h4>
                    <p>President</p>
                    <a href='tel:08130731954'><PhoneIcon/></a>
                    <a href=' https://wa.me/+2348130731954?text=Hi. i will like to make an enquire about the gavel club' target='_blank'><WhatsAppIcon/></a>
                    </div>
                    
                </div>
                <div className='exco-inner'>
                    <img src={Success} alt='image1' className='profileImg'/>
                    <div className='exco-text'>

                    <h4>Omowale Success O.</h4>
                    <p>Vice President Education</p>
                    <a href='tel:08056132113'><PhoneIcon/></a>
                    <a href=' https://wa.me/+2348056132113?text=Hi. i will like to make an enquire about the gavel club' target='_blank'><WhatsAppIcon/></a>
                    </div>


                
                </div>
                <div className='exco-inner'>
                    <img src={Dami} alt='image1' className='profileImg'/>
                    <div className='exco-text'>

                    <h4>Adebowale Damilola</h4>
                    <p>Vice President Membership</p>
                    <a href='tel:090563449979'><PhoneIcon/></a>
                    <a href=' https://wa.me/+23490563449979?text=Hi. i will like to make an enquire about the gavel club' target='_blank'><WhatsAppIcon/></a>

                    </div>
                    

            
               </div>
               <div className='exco-inner'>
                    <img src={Taiwo} alt='image1' className='profileImg'/>
                    <div className='exco-text'>

                    <h4>Taiwo Adekemi A.</h4>
                    <p>Treasurer</p>
                    <a href='tel:08137804392'><PhoneIcon/></a>
                    <a href=' https://wa.me/+2348137804392?text=Hi. i will like to make an enquire about the gavel club' target='_blank'><WhatsAppIcon/></a>
                    </div>

               </div>
               <div className='exco-inner'>
                    <img src={Sonia} alt='image1' className='profileImg'/>
                    <div className='exco-text'>

                    <h4>Agboiyi Sonia Ekata</h4>
                    <p>Secretary</p>
                    <a href='tel:08142678392'><PhoneIcon/></a>
                    <a href=' https://wa.me/+2348142678392?text=Hi. i will like to make an enquire about the gavel club' target='_blank'><WhatsAppIcon/></a>
                    </div>

            
               </div>
               <div className='exco-inner'>
                    <img src={Daniel} alt='image1' className='profileImg'/>
                    <div className='exco-text'>
                    <h4>Longe Olakunle </h4>
                    <p>Sergeant at arms</p>
                    <a href='tel:08146207268'><PhoneIcon/></a>
                    <a href=' https://wa.me/+2348146207268?text=Hi. i will like to make an enquire about the gavel club' target='_blank'><WhatsAppIcon/></a>
                    </div>
            
               </div>
            </div>
        </section>
    )
}

export default Exco
