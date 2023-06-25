import React, { useState, useEffect } from 'react';
import Mynav from './mynav';
import login from './image/login.png';
import { Link } from 'react-router-dom';
import leftform from './image/leftform.webp';
import biceps from './image/biceps.png';
import chest from './image/chest.png';
import leg from './image/leg.jpg';
import abs from './image/abs.png';
import back from './image/back.png';
import delt from './image/delt.png';


const Login = () => {

    let [puser, pickUserid] = useState("");
    let [ppass, pickPass] = useState("");






    const submit = () => {
        if (puser == "" || ppass == "") {
            document.getElementById("msg").innerHTML = "Kindly Enter Your Details....";
        }

        else {

            fetch("http://localhost:12345/userinfo")
                .then(Response => Response.json())
                .then(userinfo => {
                    if (userinfo[0].email == puser && userinfo[0].password == ppass) {

                        localStorage.setItem("adminid", userinfo[0].id);// setup local storage
                        localStorage.setItem("fullname", userinfo[0].name);
                        window.location.href = "http://localhost:3000/#/";// go to home page
                        window.location.reload();// reloading the page
                    }
                    else if (userinfo[1].email == puser && userinfo[1].password == ppass) {

                        localStorage.setItem("adminid", userinfo[1].id);// setup local storage
                        localStorage.setItem("fullname", userinfo[1].name);
                        window.location.href = "http://localhost:3000/?#/";// go to home page
                        window.location.reload();// reloading the page


                    }
                    else {
                        document.getElementById("msg").innerHTML = "Incorrect Details..."
                    }
                })
        }
    }





    return (
        <>
            <Mynav />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 '>

                        <div className='row mt-5'>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-8'>
                                <form className='form-control' id='loginleftform'>
                                    <div id='logindiv'>
                                        <div id='logindiv1'>
                                            <h6 className='text text-secondary p-1'>Muscle <br />Mania Gym</h6>
                                            <p className='text text-light p-2'>no pain no gain
                                                <br /><i className='text text-dark '> improve your stamina</i></p>
                                        </div >
                                        <div id='logindiv1'>
                                            <img src={leftform} width="100px" height="100px" className='p-1 m-0' />
                                        </div>
                                    </div>
                                    <br />
                                    <h5>christmas Offers....</h5>
                                    <p><mark> Three Days Free Trials</mark></p>
                                    <h5>By Muscle Mania....</h5>
                                    <p className='text text-muted'>offers valid till 31st December</p>
                                    <Link to="/register"> <button id='loginleftformbtn'>Register Now</button></Link>
                                    <p><i class='material-symbols-outlined'>watch</i><big><b>9 Am 1st Jan </b></big></p>
                                </form>
                            </div>
                            <div className='col-lg-1'></div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <center>
                            <br /><br />
                            <form className='form-control mb-5 mt-1 pb-4 pt-5' id='formlogin'>
                                <img src={login} width="80px" height="80px" />
                                <h5 className='txt text-danger' id='msg'></h5>
                                <p> <h5 id='logininput' className='text '>User Id</h5><input id='logininput' required
                                    className='form-control' placeholder='Enter here....'
                                    type="email" size="18"
                                    onChange={obj => pickUserid(obj.target.value)} value={puser} /></p>

                                <p>  <h5 id='logininput'>Password</h5><input id='logininput' className='form-control' placeholder='password....'
                                    type="Password" size="15" required onChange={obj => pickPass(obj.target.value)} value={ppass} /></p>
                                <p className=' text-dark'><input type="checkbox" />  Remember Password </p>
                                <button id='loginbtn' className='form-control btn btn-warning btn-sm' onClick={submit}>Submit</button>
                            </form></center>


                    </div>

                    <div className='col-md-3 mt-5'>

                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;