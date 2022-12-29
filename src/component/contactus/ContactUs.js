import { Fragment } from 'react'
import './Contact.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function ContactUs(){
    return(
    <Fragment>

    <section className='contact'>

    <div className='contact-heading'>
        <h2> Contact Us </h2>

    </div>  

    <div className='container'>
        <div className="row">

            <div className='column'>
            <div className='contact-widget'>

                <div className='contact-widget-item'>
                    <div className='icon'>
                    <AddLocationIcon style={{width:"50px",height:"35px",marginTop:"10px"}}/>

                    {/* <i class="npm i --save @fortawesome/react-fontawesome@latest"> </i> */}
                    </div>
                    <div className='text'>
                        <h5> Address </h5>
                        <p> New Ashok Nagar, Delhi</p>

                    </div>
                </div>


                <div className='contact-widget-item'>
                    <div className='icon'>

                    <LocalPhoneIcon style={{width:"50px",height:"35px",marginTop:"10px"}}/>
                    </div>
                    <div className='text'>
                        <h5> Contact Us </h5>
                        <p> +91451254265 | 054268464</p>

                    </div>
                </div>


                <div className='contact-widget-item'>
                    <div className='icon'>

                    <EmailIcon style={{width:"50px",height:"35px",marginTop:"10px"}}/>
                    </div>
                    <div className='text'>
                        <h5> Mail </h5>
                        <p> yoursupport567@gmail.com</p>

                    </div>
                </div>

            </div>

            </div>   

            <div className='column'>
                <div className='contact-form'>
                    <form action="#">
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                        <input type="tel" placeholder='Phone Number'/>
                        <textarea placeholder='Comment'></textarea>
                        <button type="submit" className='site-btn'>Send Button</button>
                    </form>

                </div>

            </div>

            <div className='row'>
            <div className='map-column'>
                <div className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.941212115273!2d77.30602809999999!3d28.592717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b866af1ef%3A0x58913d62225c2c0!2sNew%20Ashok%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1672216274247!5m2!1sen!2sin"
                 width="600" height="450" style={{border:0}} 
                 allowfullscreen="" loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade">

                </iframe>

                </div>

            </div>

            </div>
        </div>

    </div>
    

    </section>    


    </Fragment>

    );
}

export default ContactUs;