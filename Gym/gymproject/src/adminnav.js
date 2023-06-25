import React from "react";
import { Link } from "react-router-dom";

const Adminnav = () => {

    const Logout = () =>{
        localStorage.clear(); // delete all data from local storage
        window.location.href="http://localhost:3000/#/login";// go to home page
        window.location.reload();// reloading the page
      }
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
    
<ul className="form-control" >
    <li id="adminnav"><Link to='/'  id="adminlink">Dashboard</Link></li>
    <li id="adminnav"><Link to='/gallery'  id="adminlink">Gallery</Link></li>
    <li id="adminnav"><Link to='/firstpage'  id="adminlink">1St Page</Link></li>
    <li id="adminnav"><Link to='/secondpage'  id="adminlink">2nd Page</Link></li>
    <li id="adminnav"><Link to='/thirdpage'  id="adminlink">3rd Page</Link></li>
    <li id="adminnav"><a href="javascript:void(0)" onClick={Logout}>Welcome {localStorage.getItem("fullname")}Logout</a></li>

</ul>
</div>b
</div>
</div>
</>
  )

};

export default Adminnav;
