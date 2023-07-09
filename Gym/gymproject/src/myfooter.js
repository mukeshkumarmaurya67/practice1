import { Link } from "react-router-dom";
import icon5 from "./image/icon5.png";
import icon6 from "./image/icon6.png";
import icon7 from "./image/icon7.png";
import icon8 from "./image/icon8.png";
import icon9 from "./image/icon9.png";
import png1 from "./image/png1.png";
import pngfooter from "./image/pngfooter.png";
import Userproducts from "./userproduct";
const Myfooter = () => {
    return (
<>
<footer className="footer-parent footer-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="footer-banner-left">
                <h3 className="text text-warning text-center">
                  STAY CONNECTED: JOIN OUR NEWSLETTER
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="footer-banner-right">
                <input type="email" required placeholder="  ENTER YOUR EMAIL" />
                <button className="btns">GO</button>
              </div>
            </div>
          </div>
        </div>
      </footer>







      <footer className="main-footer">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="footer-content">
                <h3>Contact Us</h3>
                <p>
                  100 South 45th Street
                  <br />
                  Suite 2000
                  <br />
                  M.G Road,Pin:-560032
                  <br />
                  <br />
                  Phone: +91-7019138442
                  <br />
                  Email: support@mswebworld.com
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="footer-content">
                <h3>Menu</h3>
                <ul>
                <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>

                  <li>
                    <a href="#">Connect</a>
                  </li>      
                           <li>
                    <a href="#">About</a>
                  </li>

                  <li>
                    <a href="#">Offers</a>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
   
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer-content">
                <h3 className="text text-center">Contact With Us</h3>

                <div className="row gy-4 mt-3 justify-content-center">
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* <img src={facebook} width="45" height="45" />  */}
                    <i class="fa-brands fa-facebook fa-xl"></i> facebook
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* <img src={twitter} width="45" height="45" /> */}
                    <i class="fa-brands fa-twitter fa-xl"></i> twitter
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* <img src={inkedin} width="45" height="45" />  */}
                    <i class="fa-brands fa-linkedin-in fa-xl"></i> linkedin
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    {/* <img src={instagram} width="45" height="45" /> */}
                    <i class="fa-brands fa-instagram fa-xl"></i> instagram
                  </div>
                  <div className="col-lg-12 col-md-12 col-6">
                    
                    <i class="fa-brands fa-youtube fa-xl"></i> Youtube
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright">
            <i className="fa fa-copyright"></i>2023 mswebworld Digital Marketing
            / <span>PRIVACY POLICY</span>
          </p>
        </div>
      </footer>



</>



        // <div className="container-fluid mt-2">
        //     <div className="row text-secondary" id="contact1">
        //         <div className="col-lg-4"> <i class="fa fa-thin fa-map" > </i>New Delhi, India</div>
        //         <div className="col-lg-4"> <i class="fa fa-thin fa-phone"> </i> +91-7019138442</div>
        //         <div className="col-lg-4">  <i class=" fa fa-envelope"> </i> Support@mswebworld.com</div>
        //     </div>

        //     <div className="row " id="contact2">

        //         <div className="col-lg-6">
        //             <img src={pngfooter} width="150px" height="150px" />
        //             <p className="text-dark">A gym is a large room, usually containing special equipment, where people
        //                 go to do physical
        //                 exercise and get fit The gym has exercise bikes and running machines.
        //                 While some guests play golf,
        //                 others work out in the hotel gym.</p>

        //             <img src={icon5} width="40px" height="40px" className="img img-thumbnail" id="img2" />
        //             <img src={icon6} width="40px" height="40px" className="img img-thumbnail" id="img2" />
        //             <img src={icon7} width="40px" height="40px" className="img img-thumbnail" id="img2" />
        //             <img src={icon8} width="40px" height="40px" className="img img-thumbnail" id="img2" />
        //             <img src={icon9} width="40px" height="40px" className="img img-thumbnail" id="img2" />



        //         </div>

        //         <div className="col-lg-6">
        //             <div className="row">
        //                 <div className="footer-right-content">
        //                     <div className="col-lg-6">
        //                         <div className="footer-usefull-links">
        //                             <h6 className="text-center text-dark pt-5">Usefull Links</h6>
        //                             <p className="text-center">
        //                                 <Link to="/" ><i id='linkcolor'> Home</i>  </Link> <br />
        //                                 <Link to="/aboutpath" ><i id='linkcolor'>   About</i> </Link><br />
        //                                 <Link to="/blog" ><i id='linkcolor'> Blog</i>   </Link><br />
        //                                 <Link to="/contactpath" ><i id='linkcolor'> Contact</i>   </Link></p>

        //                         </div>
        //                     </div>
        //                     <div className="col-lg-6">
        //                         <div className="support-content">
        //                             <h6 className="text-center text-dark pt-5">Supports</h6>
        //                             <p className="text-center" ><Link to="/login"><i id='linkcolor'> Login </i></Link><br />
        //                                 <Link to="/profilepath" > <i id='linkcolor'> Profile</i> </Link><br />
        //                                 <Link to="/career" ><i id='linkcolor'> Career</i></Link><br />
        //                                 <Link to="/admn" ><i id='linkcolor'>Adminstretive</i></Link> </p>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
                    
        //             <center><p className="text-dark font-weight-bold footer-line">
        //                 <i class="fa fa-copyright">
        //                 </i>Copyrightmswebworld.com 2022-24</p></center>
        //         </div>

        //     </div>


        // </div>
    )
}

export default Myfooter;