import png1 from "./image/png1.png";
import arrowdown2 from "./image/arrowdown2.png";
import arrowup from "./image/arrowup.png";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';




const Mynav = () => {
    let navigate = useLocation();

    console.log(navigate);

    let [product, setProduct] = useState([]);

    const getProduct = () => {
        var url = "http://localhost:12345/cartProduct";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                setProduct(productArray);
            })
        console.log(product)
    }

    useEffect(() => {
        getProduct();

    },[1]);


    const click = () => {
        let x = document.getElementById("secondul");
        let y= document.getElementById("img");
        if (x.style.display === 'none'){
            x.style.display = 'block';
            y.src=arrowup;
            
        }
            

        else { x.style.display = 'none'; y.src=arrowdown2;
    }
}
setTimeout(()=>{if(window.location.href==="https://mswebworld.com/#/gallery"){

var x=document.getElementById("glry1");
x.style.backgroundColor='red';
}

else if(window.location.href==="https://mswebworld.com/#/"){

var y=document.getElementById("home1");
y.style.backgroundColor='red';
}

else if(window.location.href==="https://mswebworld.com/#/aboutpath"){

var z=document.getElementById("about1");
z.style.backgroundColor='red';
}

else if(window.location.href==="https://mswebworld.com/#/contactpath"){

var a=document.getElementById("contact11");
a.style.backgroundColor='red';
}

else if(window.location.href==="https://mswebworld.com/#/profilepath"){

var b=document.getElementById("profile1");
b.style.backgroundColor='red';
}

else if(window.location.href==="https://mswebworld.com/#/cartpath"){

var c=document.getElementById("cart1");
c.style.backgroundColor='red';
}

else if(window.location.href==="https://mswebworld.com/#/login"){

var d=document.getElementById("btnlogin");
d.style.backgroundColor='red';
}



},0)



    return (

        <nav className="navbar navbar-expand-sm p-1 " id="nav">

            <div className="container-fluid">
                <a className="navbar-brand text-danger">
                    <img src={png1} width="30px" height="30px" />  Fitness Club
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon navbar-toggler-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">

                    <ul className="navbar-nav mx-auto" >
                        <li className="nav-item px-2 text-warning li1" id="home1"><Link className="nav-link active text-light" to="/" >
                        <i class="fa-solid fa-house fa-beat-fade"></i> Home  </Link></li>

                        <li className="nav-item px-3 text-warning  li1"  id="glry1"><Link className="nav-link active text-light" to="/gallery" > <i class="fa-regular fa-image"> </i> Gallery</Link></li>

                        <li className="nav-item px-3  li1" id="about1" ><Link className="nav-link active text-light" to="/aboutpath" >
                            <i className="fa fa-book" > </i> About </Link></li>

                        <li className="nav-item px-3 pt-2 li1" id="contact11"  onClick={click} style={{position:'relative',}}>
                            Contact <img src={arrowdown2} width="20px" height="20px" id="img" />

                        <ul id='secondul' style={{
                            position: 'absolute',
                            margin:'0',
                            display: 'none',
                            padding:'0',
                            top:'47px',
                            margin:'0',
                            left:'-12px',
                           
                           backgroundColor:'rgb(21, 30, 60)'
                           
                            
                           
                            
                        }}>

                            <li class="nav_nested_ul_li"><Link className="nav-link active text-light" to="/contactpath"  >Connect With-Us</Link></li>
                            <li class="nav_nested_ul_li"><Link className="nav-link active text-light" to="/emailsupport"  >Email-Support</Link></li>
                            <li class="nav_nested_ul_li"><Link className="nav-link active text-light" to="/callus"  >Call-Us</Link></li>

                        </ul>
                        </li>
                        
                        <li className="nav-item px-3 li1" id="profile1" ><Link className="nav-link active text-light" to="/profilepath" >
                            <i className="fa fa-user" > </i>  My Profile </Link></li>

                        <li className="nav-item px-3 li1" id="cart1"><Link className="nav-link active text-light" to="/cartpath" >
                            <i className="fa fa-cart-plus" > </i> Cart-<span style={{ color: 'yellow', fontSize: '12px', fontWeight: 'bold' }}> {product.length}</span>  </Link></li>
                    </ul>


                </div>
                <div >
                    <Link to='/login'>  <button className="btn btn-warning text-light btn-sm" id="btnlogin">
                        < i class="fa fa-sign-in " ></i> Login   </button></Link>
                </div>
            </div>
        </nav>
    )
}
export default Mynav;

