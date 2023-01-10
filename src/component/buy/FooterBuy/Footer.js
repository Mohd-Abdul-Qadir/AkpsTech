import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div className='BuyFooter'>
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn style={{backgroundColor:'white'}}
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            {/* <MDBIcon fab className='fab fa-facebook-f' /> */}
            <FacebookIcon/>
          </MDBBtn>

          <MDBBtn style={{backgroundColor:'white'}}
            // rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
            <TwitterIcon/>
          </MDBBtn>

          <MDBBtn
          style={{backgroundColor:'white'}}
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
            <GoogleIcon/>
          </MDBBtn>

          <MDBBtn
          style={{backgroundColor:'white'}}
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
            <InstagramIcon/>
          </MDBBtn>

          <MDBBtn
          style={{backgroundColor:'white'}}
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
            <LinkedInIcon/>
          </MDBBtn>

          <MDBBtn
          style={{backgroundColor:'white'}}
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
            <GitHubIcon/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: ' rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark' href='https://akpstechnology.business.site//'>
        akpstechnology.com
        </a>
      </div>
    </MDBFooter>
  </div>
  )
};

export default Footer