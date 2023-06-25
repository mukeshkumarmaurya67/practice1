import { useState, useEffect, useRef, useReducer,dispatch,state,useContext } from "react";


const Prctc1=()=>{

let[otp,setOtp]=useState(Number(Math.random()*1000000).toPrecision(6));

let[userotp,setUserotp]=useState();

let[msg,setMsg]=useState('');





const submits=()=>{

  if(otp==userotp){
    setMsg("verification successfull !")
  }
  else{
    setMsg("Inncorrect OTP !")
  }


}

const etc=()=>{
  setMsg('')
}



const abc=()=>{
  setOtp(++otp)
}



useEffect(()=>{
  setTimeout(abc,6000);
  setTimeout(etc,5000);
},[1])
return(
 <>
 <h2 className="m-5 text text-center bg-secondary text-warning">{msg}</h2>

<h3>Enter otp here 
  <input type="number" placeholder="otp" onChange={obj=>setUserotp(obj.target.value)} value={userotp} />    
<button onClick={submits} className="btn btn-success btn-sm">  Submit</button>
</h3>

<h6>genrated otp is: {otp}</h6>



  </>
)

 
}

export default Prctc1