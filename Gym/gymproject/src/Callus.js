import React from 'react'
import Mynav from './mynav'

const Callus = () => {
  return (
    <>
    <Mynav />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <div style={{ display: 'flex', justifyContent: 'start', marginTop: '20px', marginLeft: '50px' }}>
              <img src='https://t3.ftcdn.net/jpg/00/94/03/34/360_F_94033454_S690mu1nxmkgYCxaKPZ4v7PBXxD3BNSU.webp'
                height="400px" width="400px" style={{ borderRadius: '50% 50%', border: '5px solid white' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'start', marginTop: '20px', position: 'absolute', top: '270px', left: '0px' }}>
              <img src='https://media.istockphoto.com/id/924491214/photo/muscular-man-working-out-in-gym-strong-male-torso-abs.jpg?s=170667a&w=0&k=20&c=6ssDROHdu1I4Ez0E7P8uDU0_UVAQrcm9ai7-oZYq4ic='
                height="250px" width="250px" style={{ borderRadius: '50% 50%', borderTop: '5px solid navy', borderBottom: '5px solid red', borderLeft: '5px solid lime', borderRight: '5px solid tomato' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'start', marginTop: '20px', position: 'absolute', top: '460px', left: '200px' }}>
              <img src='https://c4.wallpaperflare.com/wallpaper/141/118/394/sports-fitness-black-hair-brown-eyes-girl-hd-wallpaper-preview.jpg'
                height="150px" width="150px" style={{ borderRadius: '50% 50%', borderTop: '5px solid navy', borderBottom: '5px solid red', borderLeft: '5px solid lime', borderRight: '5px solid tomato' }} />

              <div style={{ backgroundColor: 'white', height: '50px', width: '50px', borderRadius: '50%', outline: '25px solid cadetblue', marginLeft: '20px' }}></div>
            </div>
          </div>
          <div className='col-sm-2'></div>
          <div className='col-sm-4'>

            <div className='row' style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: 'grey',marginTop:'150px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <span style={{ backgroundColor: 'red', borderRadius: '50% 50%', margin: '5px' }}>&nbsp;&nbsp;</span>
                  <span style={{ backgroundColor: 'yellow', borderRadius: '50% 50%', margin: '5px' }}>&nbsp;&nbsp;</span>
                  <span style={{ backgroundColor: 'lime', borderRadius: '50% 50%', margin: '5px' }}>&nbsp;&nbsp;</span>
                </span>

                <span>
                  <i class="fa-solid fa-ellipsis"></i>
                </span>

              </div>
            </div>
            <div className='row pt-5' style={{ backgroundColor: '#333533' }}>
              <div className='col-sm-7'>
                <div>
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#96031a' }}>CONTACT<br /><u>U</u>S</span>
                </div>
              </div>





              <div className='col-sm-5'>
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', padding: '15px' }}>
                  <input type="text" value="Your Name" style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid gray', color: 'white',outline:'unset'}} />
                  <input type="text" placeholder='Email' style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid gray', color: 'white',outline:'unset' }} />
                  <input type="text" placeholder='Contact no' style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid gray', color: 'white',outline:'unset' }} />
                  <input type="text" placeholder="Query" style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid gray', color: 'white',outline:'unset' }} />
                </div>

              </div>
            </div>
            <div className='row pb-3' style={{ backgroundColor: '#333533',borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px' }}>
              <div style={{display:'grid',gridTemplateColumns:'auto auto',justifyContent:'space-between'}}>
                <span style={{color:'gray',fontSize:'12px',fontWeight:'600'}}>CONTACT INFO:- +91-7019-13840-42</span>
                <span><button style={{backgroundColor:'transparent',
                border:'none',
                color:'#96031a',
                fontSize:'14px',
                fontWeight:'600',
                margin:'1px 12px 1px 1px'
                }}>CANCEL</button>

                <button style={{backgroundColor:'transparent',
                border:'none',
                color:'#96031a',
                fontSize:'14px',
                fontWeight:'600',
                margin:'1px 12px 1px 1px'
                }}>SEND</button></span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Callus;