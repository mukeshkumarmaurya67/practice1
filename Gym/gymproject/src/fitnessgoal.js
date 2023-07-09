import img1 from "./image/img1.png";
import { react, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';
import Alert from 'react-bootstrap/Alert';

import emailjs from '@emailjs/browser';
import { useRef } from 'react';





const FitnessGoal = () => {
   let [show, setShow] = useState(false);
   let mdisplay = () => { setShow(true) };
   let mhide = () => {
      setShow(false);
   };
   //for modal popup registration form
   let [name, setName] = useState("");
   let [email, setEmail] = useState("");
   let [num, setNum] = useState("");
   let [altnum, setAltnum] = useState("");
   let [age, setAge] = useState("");
   let [weight, setWeight] = useState("");
   let [data, setData] = useState([]);
   const getDetails = () => {
      var url = "http://localhost:12345/regdetails";
      fetch(url)
         .then((Response) => Response.json())
         .then((details) => {
            setData(details);
         });
   };
   useEffect(() => {
      getDetails();
   }, [1]);
   const submit = () => {
      if (name == "" || email == "" || num == "" || age == "" || weight == "") {
         alert("Kindly fill all the details")
      }
      else {
         var url = "http://localhost:12345/regdetails";
         var file = { "name": name, "weight": weight, "num": num, "mail": email, "altnum": altnum, "age": age };
         var postData = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(file)
         };
         fetch(url, postData)
            .then((response) => response.json())
            .then((serverres) => {
               setName("");
               setWeight("");
               setEmail("");
               setNum("");
               setAge("");
               setAltnum("");
            })
      }
   }



   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mwtkpe8', 'template_669ldmn', form.current, '-YbJitSmI58m5cNrl')
      .then((result) => {
          console.log(result.text);
  alert("We Will Communicate U Soon.....");
  mhide() ;

      }, (error) => {
          console.log(error.text);
      });
  };
   return (
      <>
         {/* reach-fitness-goal */}
         <section className="fitness-goal bg-blue py-50">
            <div className='container mt-2'>
               <h1 className="text-warning banner-title">Reach <span className="text-light">Your</span> <span className="text-light">
                  Fitness</span> Goal  Faster
               </h1>
               <div className="row">
                  <div className="col-lg-6 fitness-goal-order">
                     <div className="fitness-goal-left-content">
                        <p>This is to inform u that we are going to wwork on Body bulding tutorial That said,
                           it’s also important to know that there are many different ways to be fit (think of a ballet
                           dancer versus a bodybuilder or a sprinter versus a gymnast).
                        </p>
                        <p> And fitness does not have a
                           singular “look.” In fact, appearance can’t necessarily tell you about
                           someone’s
                           habits, whether they’re actually physically active, or even whether they’re fit at all.
                        </p>

                        <Modal show={show} centered size="md" backdrop="static" keyboard={false}>
                           <Modal.Header onClick={mhide} closeButton >
                              <Modal.Title style={{ textAlign: 'center' }}>Registration Forms....</Modal.Title>
                           </Modal.Header>
                           <Modal.Body className="p-3">
                              <form  onSubmit={sendEmail} ref={form}>
                              {/* <form onSubmit={sendEmail} className="form-control" ref={form}> */}
                                 <div className="mb-2">
                                    <label className="form-label">Name</label>
                                    <input type="text" required="true" placeholder="Enter Your Name here...." className="form-control form-control-sm shadow" onChange={obj => setName(obj.target.value)} value={name} />
                                 </div>
                                 <div className="row mb-2">
                                    <div className=" col">
                                       <label className="form-label">Age</label>
                                       <input required type="number" className="form-control form-control-sm shadow" placeholder="Age Must be Between 18 - 60 Years" onChange={obj => setAge(obj.target.value)} value={age} />
                                    </div>
                                    <div className=" col">
                                       <label className="form-label">Weight</label>
                                       <input required type="number" className="form-control form-control-sm shadow" placeholder="Weight ?" onChange={obj => setWeight(obj.target.value)} value={weight} />
                                    </div>
                                    <div className=" col">
                                       <label className="form-label">Sex</label>
                                       <select className="form-control  shadow">
                                          <option >Male</option>
                                          <option>Female</option>
                                          <option>Others</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="mb-2">
                                    <label className="form-label">Email Id</label>
                                    <input required type="email" placeholder="Enter Your Name here...." className="form-control form-control-sm shadow" onChange={obj => setEmail(obj.target.value)} value={email} />
                                 </div>
                                 <div className="mb-2">
                                    <label className="form-label">Contact No:</label>
                                    <input required type="tel" placeholder="Enter Your number here...." className="form-control form-control-sm shadow" onChange={obj => setNum(obj.target.value)} value={num} maxLength={10} />
                                 </div>
                                 <div className="mb-2">
                                    <label className="form-label">Alternate number-optional</label>
                                    <input type="text" placeholder="Enter Your Name here...." className="form-control form-control-sm shadow" onChange={obj => setAltnum(obj.target.value)} value={altnum} />
                                 </div>
                                 <input type="submit" value="send" className="btn form-control btn-primary mt-2" />
                              </form>
                           </Modal.Body>
                           <Modal.Footer>
                              <div className="btn-group">
                                 <Button variant="secondary" style={{ width: '180px' }} onClick={mhide}>Cancel</Button>
                              </div>
                           </Modal.Footer>
                        </Modal>
                     </div>
                  </div>
                  <div className="col-lg-6 ">
                     <div className="fitness-goal-img">
                        <img src={img1} width="1165" height="788" className="img-fluid" />
                     </div>
                  </div>
                  <div className="mt-2 align-center">
                     
                           <a className="blue-button" href="#" onClick={mdisplay}>Register Now</a>
                        </div>
               </div>
            </div>
         </section>
      </>
   )
}
export default FitnessGoal;