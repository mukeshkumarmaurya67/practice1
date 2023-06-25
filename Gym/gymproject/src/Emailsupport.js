import React from 'react'
import Mynav from './mynav';

const Emailsupport = () => {
  return (
    <>
    <Mynav />


      <div className='container mt-5' style={{ width: '65%', boxShadow: '2px 2px 5px 5px gray' }}>
        <div className='row' style={{ backgroundColor: 'cadetblue', height: '300px' }}></div>
        <div className='row' style={{ backgroundColor: 'white', height: '300px' }}></div>

      </div>

      <div className='container' style={{ width: '50%', position: 'absolute', top: '160px', left: '25%', boxShadow: '2px 2px 5px 2px gray', }}>
        <div className='row'>
          <div className='col-sm-7' style={{ backgroundColor: 'white', height: '480px', }}>
            <div>
              <h5 className='mt-2 p-2'style={{color:'#004664'}}>Send us an email</h5>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', rowGap: '30px', marginTop: '50px' }}>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', }} class="email-contact-text1">Name:</label>
                  <input type="text" placeholder='name....' class="email-contact-input1" />
                </div>


                <div>
                  <label style={{ display: 'block', fontSize: '14px' }} class="email-contact-text1">Email:</label>
                  <input type="text" placeholder='Your email' class="email-contact-input1" />
                </div>


                <div>
                  <label style={{ display: 'block', fontSize: '14px' }} class="email-contact-text1">Contact:</label>
                  <input type="text" placeholder='#contact' class="email-contact-input1" />
                </div>


                <div>
                  <label style={{ display: 'block', fontSize: '14px' }} class="email-contact-text1">Issue:</label>
                  <input type="text" placeholder='issue in short' class="email-contact-input1" />
                </div>




              </div>

              <div style={{ marginTop: '50px' }}>
                <label class="email-contact-text1" style={{ fontSize: '14px', marginBottom: '5px' }}>Message:</label>
                <textarea rows="4" style={{ width: '100%', border: 'none', borderBottom: '1px solid rgb(167, 164, 164)' ,outline:'unset'}} placeholder="write your message here..." />
              </div>
              <button style={{backgroundColor:'#004664',color:'white',padding:'5px',borderRadius:'3px 3px'}}>SEND MESSAGE</button>
            </div>



          </div>








          <div className='col-sm-5' style={{ backgroundColor: '#004664', height: '480px', }}>
            <div style={{ padding: '30px' }}><span style={{ color: 'white', fontSize: '16px' }}>Contact Information</span><br />
              <span style={{ marginTop: '50px', display: 'inline-block', marginBottom: '50px' }} class="email-contact-text1">Contact Form V17 immediately pops   with
                <br />
                the Two-One background,</span><br />
              <i class="fa fa-map" style={{ color: 'white' }}></i><span style={{ marginLeft: '15px' }} class="email-contact-text1">9757 Aspen Lane North Richmond<br />
                <span style={{ marginLeft: '32px' }} class="email-contact-text1">Hill,NY 11419</span></span><br />
              <i class="fa fa-phone" style={{ color: 'white' }}></i><span style={{ marginLeft: '15px' }} class="email-contact-text1"> +91(7019)138442</span><br />

              <i class="fa fa-envelope" style={{ color: 'white' }}></i><span style={{ marginLeft: '15px' }} class="email-contact-text1">Support@mswebworld.com</span>
            </div>
          </div>
        </div>
      </div>


      


    </>
  )
}

export default Emailsupport;