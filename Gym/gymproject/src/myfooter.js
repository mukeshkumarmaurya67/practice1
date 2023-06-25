import { Link } from "react-router-dom";
import icon5 from "./image/icon5.png";
import icon6 from "./image/icon6.png";
import icon7 from "./image/icon7.png";
import icon8 from "./image/icon8.png";
import icon9 from "./image/icon9.png";
import png1 from "./image/png1.png";
import pngfooter from "./image/pngfooter.png";
import Userproducts from "./userproduct";
const Myfooter=()=>{
    return(
        <div className="container-fluid mt-2">
                <div className="row text-secondary" id="contact1">
                    <div className="col-lg-4"> <i class="fa fa-thin fa-map" > </i>New Delhi, India</div>
                    <div className="col-lg-4"> <i class="fa fa-thin fa-phone"> </i> +91-7019138442</div>
                    <div className="col-lg-4">  <i class=" fa fa-envelope"> </i> Support@mswebworld.com</div>
                </div>
               
                <div className="row " id="contact2">

                    <div className="col-lg-6">
                        <img src={pngfooter} width="150px" height="150px" />
                        <p className="text-dark">A gym is a large room, usually containing special equipment, where people
                            go to do physical
                            exercise and get fit The gym has exercise bikes and running machines.
                            While some guests play golf,
                            others work out in the hotel gym.</p>

                        <img src={icon5} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon6} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon7} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon8} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon9} width="40px" height="40px" className="img img-thumbnail" id="img2" />



                    </div>
                  

                    <div className="col-lg-3">
                        <h6 className="text-center text-dark pt-5">Usefull Links</h6>
                        <p className="text-center">
                          <Link to="/" ><i id='linkcolor'> Home</i>  </Link> <br />
                          <Link to="/aboutpath" ><i id='linkcolor'>   About</i> </Link><br />
                          <Link to="/blog" ><i id='linkcolor'> Blog</i>   </Link><br />
                            <Link to="/contactpath" ><i id='linkcolor'> Contact</i>   </Link></p>


                    </div>
                    <div className="col-lg-3"><h6 className="text-center text-dark pt-5">Supports</h6>
                        <p className="text-center" ><Link to="/login"><i id='linkcolor'> Login </i></Link><br />
                        <Link to="/profilepath" > <i id='linkcolor'> Profile</i> </Link><br />
                        <Link to="/career" ><i id='linkcolor'> Career</i></Link><br />
                        <Link to="/admn" ><i id='linkcolor'>Adminstretive</i></Link> </p>
                    <br/>
                    <hr id="hr"/>
                    <p className="text-center text-dark font-weight-bold"><i class="fa fa-copyright"> </i>Copyrightmswebworld.com 2022-24</p>
                </div></div>
                
            </div>
    )
}

export default Myfooter;