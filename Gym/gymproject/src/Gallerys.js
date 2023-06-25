import React, { useEffect, useState } from 'react'
import ImageSlider from 'react-simple-image-slider';
import Mynav from './mynav';
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';

import img1 from './image/scrollbar-1.webp';
import img2 from './image/scrollbar-2.webp';
import img3 from './image/scrollbar-3.webp';
import img4 from './image/scrollbar-4.webp';
import img5 from './image/scrollbar-5.webp';
import img6 from './image/scrollbar-6.webp';
import img7 from './image/scrollbar-7.webp';
import img8 from './image/scrollbar-8.webp';
import img9 from './image/scrollbar-9.webp';
import img10 from './image/scrollbar-10.webp';
import img11 from './image/scrollbar-11.webp';

const Gallerys = () => {

  let image = ["https://imgix.bustle.com/uploads/shutterstock/2021/2/10/4aa009a5-5769-4380-8029-663d2f674110-shutterstock-1102455686.jpg?w=1200&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5506666666666666&fp-y=0.4004739336492891",
    "https://wallpapercave.com/wp/wp2333010.jpg",
    "https://experiencelife.lifetime.life/wp-content/uploads/2021/12/etin21479552-card-30x30-shred-app-training-mf-05-1136x640-1.jpg",
    "https://room.bigbadmole.com/wp-content/uploads/2018/04/dizajn-sportzala-19.jpg"
  ];



  let timer;
  const [count, setCount] = useState(0);

  const updateCount = () => {
    timer = !timer && setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 4000)

    if (count === 4) {
      setCount(0);
    }
  }


  ////////////////////////////////////////////////////////



  useEffect(() => {
    updateCount()

    return () => clearInterval(timer)
  }, [count]);




  //video-modal-popup-js-start-from-here

  let secondPopupContent = [
    {
        image: img1,
        title: "Back Workout",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt alias id quis non natus, praesentium aperiam molestias. Debitis pariatur omnis nesciunt reprehenderit aut eveniet cum eaque, perspiciatis laudantium maxime. "
    },
    {
        image: img2,
        title: "title no 2",
        description: "this is about this that"
    },
    {
        image: img3,
        title: "title no 3",
        description: "this is about this that"
    },
    {
        image: img4,
        title: "title no 4",
        description: "this is about this that"
    },
    {
        image: img5,
        title: "title no 5",
        description: "this is about this that"
    },
    {
        image: img6,
        title: "title no 6",
        description: "this is about this that"
    },
    {
        image: img7,
        title: "title no 7",
        description: "this is about this that"
    },
    {
        image: img8,
        title: "title no 8",
        description: "this is about this that"
    },
    {
        image: img9,
        title: "title no 9",
        description: "this is about this that"
    },
    {
        image: img10,
        title: "title no 10",
        description: "this is about this that"
    },
    {
        image: img11,
        title: "title no 11",
        description: "this is about this that"
    }


]

// alert(secondPopupContent[1].title)
let abc=document.getElementById("product-details");
let vf=document.getElementById("videoFunction");

let playNow=()=>{
vf.play();
}
let pauseNow=()=>{
vf.pause()
}

let [xyz, setXyz] = useState();


let [show, setShow] = useState(false);
let mdisp = () => { setShow(true); };
let mhide = () => { setShow(false) };

let [show2, setShow2] = useState(false);
let mdisp2 = (e) => {
    setShow2(true);
    setXyz(e.target.closest("li").value);
    console.log(e.target.closest("li").value);
    abc.style.display='unset';
    pauseNow();





};


let mhide2 = () => {
    abc.style.display='none';
    playNow();
};

let toggleScroll = () => {
    let a = document.getElementById("sideul");
    a.classList.contains("set-ul-width") ? a.classList.remove("set-ul-width")
        : a.classList.add("set-ul-width");
}


let intervalscroll=()=>{
    setTimeout(toggleScroll,0);
}

  return (

    <>
      <Mynav />


      <div className='container-fluid mt-4 p-0'>
        <div className='row'>
          <img src={image[count]} height="500px" width="100%" id='galaryrow1' />
        </div>
      </div>

      <h6 style={{ textAlign: 'center', fontWeight: '800', color: '#002C3E', margin: '20px 0px', padding: '20px' }}>
        Gym Gallerys
        </h6>
      <div style={{ textAlign: 'center', padding: '50px', fontSize: '15px', fontWeight: '500' }}>Going to the gym every day can help improve your cardiovascular system,strengthen your muscles,<br />
        help you maintain your weight, boost your mental health and decrease the odds that<br />
        you'll
        develop other health conditions
        </div>



      <div className='container mb-3'>
        <div id='galaryrow2'>
          <div className="galaryrow2-content">
            <div className='galaryrow2-item'>
              <img src='https://i.pinimg.com/originals/76/bd/3b/76bd3b50120e596d766c0159e36b5041.jpg' width='100%' height='250px' />

            </div>
            <p class='galaryrow2-title'>CONTENT-1</p>
          </div>

          <div className="galaryrow2-content">
            <div className='galaryrow2-item'>
              <img src='https://www.muscleandfitness.com/wp-content/uploads/2015/10/cable-crossover-content-chest-pec.jpg?w=1200&h=630&crop=1&quality=86&strip=all' height='250px' width='100%' />
              
            </div>
            <p class='galaryrow2-p'>CONTENT-2</p>
          </div>
          <div className="galaryrow2-content">
            <div className='galaryrow2-item'>
              <img src='https://w0.peakpx.com/wallpaper/263/339/HD-wallpaper-woman-doing-weight-lifting.jpg' width='100%' height='250px' />
            
            </div>
            <p class='galaryrow2-p'>CONTENT-3</p>
          </div>
          <div className="galaryrow2-content">
            <div className='galaryrow2-item'>
              <img src='http://cdn.shopify.com/s/files/1/1497/9682/articles/1_511672c1-0ca0-4b6e-be72-fe90718e9ab1.jpg?v=1648897916' width='100%' height='250px' />
              
            </div>
            <p class='galaryrow2-p'>CONTENT-4</p>
          </div>
          <div className="galaryrow2-content">
            <div className='galaryrow2-item'>
              <img src='https://fitnessvolt.com/wp-content/uploads/2020/03/workout-alone.jpg' width='100%' height='250px' />
            </div>
            <p class='galaryrow2-p'>CONTENT-5</p>
          </div>
          <div className="galaryrow2-content " type="button" >

            <p class='galaryrow2-p' id='viewmore-btn' onClick={()=>{ mdisp();intervalscroll();}}>
              View-More
              </p>
          </div>
        </div>
      </div>
 

        <div className='container-fluid mt-5' style={{ backgroundColor: 'rgb(240, 240, 240)', height: '690px' }}>
          <div className='row'>
            <h4 className='text text-center mt-2'>Publications</h4>
            <div className='col-sm-4'>
              <div className='galaryrow3-item' style={{ backgroundImage: 'url(https://onnitacademy.imgix.net/wp-content/uploads/2021/10/chestbackopener-1440x960.jpg)' }}>1</div></div>
            <div className='col-sm-4'>
              <div className='galaryrow3-item' style={{ backgroundImage: 'url(https://generationiron.com/wp-content/uploads/2020/08/bicep-curl-1-1024x543.jpg)' }}>2</div></div>
            <div className='col-sm-4'>
              <div className='galaryrow3-item' style={{ backgroundImage: 'url(https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/01/Shoulder-muscles-training-scaled.jpg?fit=2560%2C1696&ssl=1)' }}>3</div></div>
          </div>
          <div className='row'>

            <div className='col-sm-4'>
              <div className='galaryrow3-item2'>
                <span style={{ fontSize: '20px', wordSpacing: '15px', textAlign: 'center', fontWeight: '500', fontFamily: 'sans-serif' }}>Lorem qui consectetur laboris ad cillum sint ex culpa mollit deserunt nisi Lorem.</span>
                <br />
                <span style={{ fontSize: '12px', wordSpacing: '5px', textAlign: 'center', fontWeight: '500', fontFamily: 'monospace', }}>Ea eu cillum deserunt incididunt culpa veniam consequat nostrud cillum incididunt cupidatat ea.</span>
                <br />
                <button className='galaryrow3-button' >Read Article</button>
              </div>
            </div>


            <div className='col-sm-4'>
              <div className='galaryrow3-item2' >
                <span style={{ fontSize: '20px', wordSpacing: '15px', textAlign: 'center', fontWeight: '500', fontFamily: 'sans-serif' }}>Magna fugiat duis id incididunt mollit deserunt nisi Lorem </span>
                <br />
                <span style={{ fontSize: '12px', wordSpacing: '5px', textAlign: 'center', fontWeight: '500', fontFamily: 'monospace', }}>Ipsum qui ut eiusmod enim.Minim in nostrud laborum eu tempor minim aliquip cupidatat aliqua cillum excepteur ullamco nulla eiusmod.</span>
                <br />
                <button className='galaryrow3-button' >Read Article</button>
              </div>
            </div>


            <div className='col-sm-4'>
              <div className='galaryrow3-item2'>
                <span style={{ fontSize: '20px', wordSpacing: '15px', textAlign: 'center', fontWeight: '500', fontFamily: 'sans-serif' }}>Cillum consequat mollit deserunt nisi Lorem consectetur laboris ad cillum.</span>
                <br />
                <span style={{ fontSize: '12px', wordSpacing: '5px', textAlign: 'center', fontWeight: '500', fontFamily: 'monospace', }}>Enim minim consequat in sit.Adipisicing et aliquip reprehenderit laboris consequat.</span>
                <br />
                <button className='galaryrow3-button' >Read Article</button>
              </div>
            </div>

          </div>
        </div>

        <div className='container-fluid'>
          <h4 style={{ textAlign: 'center', fontSize: '35px', margin: '25px 0px' }}> Curriculam Vitae</h4>
          <div className='row'>
            <div className='col-sm-6'>
              <h6 style={{ textAlign: 'center', fontSize: '25px', letterSpacing: '4px', color: '#002C3E' }}>Recent Exhibitions</h6>
              <p style={{ textAlign: 'center' }}><span style={{ fontWeight: '500', margin: '10px 0px', color: '#002C3E' }}>2023 Jan-march</span><br /><a href='#' style={{ color: '#002C3E' }}>Arboreal</a><br /><a href='#' style={{ color: '#002C3E' }}>Mass Arts Center</a><br />Verginia Tech<br />Blacksbug Verginia</p>
              <p style={{ textAlign: 'center' }}><span style={{ fontWeight: '500', margin: '10px 0px', color: '#002C3E' }}>2022 Jun-August</span><br />Officia et voluptate incididunt labore aliqua .<br /> commodo labore aliqua  nostrud ullamco. Verginia<br />Nostrud laboris sit sint ut.</p>
              <p style={{ textAlign: 'center' }}><span style={{ fontWeight: '500', margin: '10px 0px', color: '#002C3E' }}>2022 Jun-August</span><br />Past Perfect(Solo Exhibitions)<br /> Radfort University Art Museum</p>
            </div>


            <div className='col-sm-6'>
              <div className='row'>
                <h6 style={{ textAlign: 'center', fontSize: '25px', letterSpacing: '4px', color: '#002C3E' }}>Permanent Collections</h6>
                <span style={{ textAlign: 'center', fontSize: '14px', fontWeight: '450', fontFamily: 'serif' }}>University of Gold gym<br />Richmond circle phase-3<br />Gandhi nagar trinity Circle<br />Unknown location India-56XX02</span>

              </div>
              <div className='row'>
                <h6 style={{ textAlign: 'center', fontSize: '25px', letterSpacing: '4px', color: '#002C3E' }}>Recent Workshop</h6>
                <div>
                  <center> <img src='https://static.vecteezy.com/system/resources/previews/018/923/797/non_2x/woman-workout-fitness-png.png'
                    width="150px" height="150px" /></center>
                  <p style={{ fontSize: '12px', fontWeight: '700', textAlign: 'center', marginTop: '10px' }}> <span style={{ color: 'red', fontSize: '20px', marginTop: '10px' }}> &copy;</span>Copyright JackDevStudio.com 2023-24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* video-modal-popup-start-from-here */}

<Modal show={show} centered size="xl" className='main-model'>
                <Modal.Body>
                    <div className='container gx-0'>
                        <div className='main-content'>

                            <div className='side-scrollbar-content' id='sideul'>
                                <div className='ulbg'>
                                    <ul >
                                        <li className='btn' type="button" onClick={mdisp2} value={0}><img src={img1} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={1}><img src={img2} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={2} id='5'><img src={img3} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={3}><img src={img4} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={4}><img src={img5} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={5}><img src={img6} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={6}><img src={img7} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={7}><img src={img8} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={8}><img src={img9} className='img-fluid' width="250" /></li>
                                        <li className='btn' type="button" onClick={mdisp2} value={9}><img src={img10} className='img-fluid' width="250" /></li>
                                        <li className='btn pb-0' type="button" onClick={mdisp2} value={10}><img src={img11} className='img-fluid' width="250" /></li>
                                    </ul>
                                </div>
                                <div className='side-btn'>
                                    <a className='btn' onClick={toggleScroll}>See More Content</a>
                                </div>
                                <div id="product-details">
                                    <div className='content' >
                                        <div className='content-img'>
                                            <img src={secondPopupContent.at(xyz).image} width="250" />
                                        </div>
                                        <div className='content-description'>
                                            <h3>{secondPopupContent.at(xyz).title}</h3>
                                            <p className='text text-center mt-2'> {secondPopupContent.at(xyz).description}</p>
                                        </div>
                                        <div className='sec-close-btn'>
                                            <button className='btn' onClick={mhide2} ><i class="fa-solid fa-xmark"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='video-content'>
                                <video controls width="100%" id="videoFunction" autoPlay>
                                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                                        type="video/mp4" />
                                </video>

                            </div>
                            <div className='first-close-btn'>
                                <button onClick={mhide}><i class="fa-solid fa-xmark"></i></button>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>



      </>
      )
}

export default Gallerys;