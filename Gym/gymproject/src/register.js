import { useEffect, useState } from "react";
import Mynav from "./mynav";
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import registerimage from './image/registerimage.png';
import registerimage2 from './image/registerimage2.png';


const Register = () => {
  let [pname, pickName] = useState("");
  let [pweight, pickWeight] = useState("");
  let [pnum, pickNum] = useState("");
  let [pmail, pickMail] = useState("");
  let[ptnc,pickTnc]=useState(false)
  let [msg, updatedMsg] = useState("Thanks for intrest. . . .");
  let [user, updatedUser] = useState("");
  let[page,pickAge]=useState("");
  let[pgender,PickGender]=useState("");

  //

  const getDetails = () => {
    var url = "http://localhost:12345/regdetails";
    fetch(url)
      .then((Response) => Response.json())
      .then((details) => {
        updatedUser(details);
      });
  };

  useEffect(() => {
    getDetails();
  },[1]);


  const submit = () => {
   if (pname == "" || pweight == "" || pnum == "" || pmail == ""||ptnc==false) {
    var x="<p style=color:red> Kindly fill all the details</p>"
     document.getElementById("message").innerHTML=x
    } 
   else {
      var url = "http://localhost:12345/regdetails";
      var file = { "name":pname,"weight":pweight,"num":pnum,"mail":pmail };
      var postData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(file)
      };
      fetch(url, postData)
        .then((response) => response.json())
        .then((serverres) => {
          pickName("");
          pickWeight("");
          pickMail("");
          pickNum("");
          pickAge("");
          updatedMsg("We Will Communicate Soon !....")
          getDetails(); // to reload the List
          localStorage.clear(); // delete all data from local storage
          alert("Thanks for interest")
        window.location.href="http://localhost:3000/#/";// go to home page
        window.location.reload();// reloading the page
        });
    }
  };
 

  //email code

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g6wgh5a', 'template_lilhuwd', form.current, 'X6dsMIqUOCLaJ8CmR')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
        
      };


  return (
    <>
      <Mynav />
     
      <h2 className="text text-center text-warning" id="message">{msg}  </h2>

      <div className="container" id="register">
        <div className="row">
          <div className="col-lg-2">

          <img src={registerimage} width="100%" height="360px" />

          </div>






          <div className="col-lg-8 shadow pb-2">
            <form className="form-control"   ref={form} onSubmit={sendEmail} id="form1"> 
              <h4 className="text text-center pb-5">
                <i>Enter your personal details here......</i>
              </h4>

              <p className=" p-3 text-center">
                {" "}
                <lebel>Name : </lebel>{" "}
                <input
                  type="text" 
                  placeholder="Enter Name here...." name="name" required autoFocus
                  id="btnlg"
                  onChange={(obj) => pickName(obj.target.value)}
                  value={pname}
                />
                <label>Age : </label>{" "}
                <input type="text" placeholder="18+" name="age" required id="btnsm" /> Gender :
                <select id="btnxs">
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <label> Weight : </label>{" "}
                <input
                  type="number" required name="weight" min={18} max="90"
                  id="btnxs"
                  onChange={(obj) => pickWeight(obj.target.value)}
                  value={pweight}
                />
              </p>

              <p className="pb-3 text-center">
                <label>Contact No: </label>
                <input
                  type="tel" required maxLength={10}
                  placeholder="Number..." name="contact"
                  id="btnsm"
                  onChange={(obj) => pickNum(obj.target.value)}
                  value={pnum}
                />
                <label>Email : </label>
                <input
                  type="email" required name="email"
                  placeholder="Your emial......"
                  id="btnlg"
                  onChange={(obj) => pickMail(obj.target.value)}
                  value={pmail}
                />
              </p>
              <p className="text text-center">
                <input type="checkbox" required onChange={obj=>{console.log(ptnc);if (ptnc){pickTnc(false)}else{pickTnc(true)}}} />
                I agree to the <mark>Terms & Conditions </mark> for
                WhatsApp Banking .
              </p>
              <center>
                <button className="btn btn-success btn-md" onClick={submit}>
                  Submit
                </button>
              </center>



            </form>
          </div>

          

          <div className="col-lg-2"> <img src={registerimage2} width="100%" height="360px" /></div>
        </div>
      </div>
    </>
  );
};
export default Register;
