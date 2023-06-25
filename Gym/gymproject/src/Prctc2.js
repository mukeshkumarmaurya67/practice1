import React, { useState, useEffect,useReducer,useContext } from 'react';
import Prctc1 from './prctc1';

import a1 from './audio/a1.mp3';
import a2 from './audio/a2.mp3';
import a3 from './audio/a3.mp3';
import a4 from './audio/a4.mp3';
import a5 from './audio/a5.mp3';



const Prctc2 = () => {

//This is for audio player

let song=[a1,a2,a3,a4,a5];


let[sng,setSng]=useState(0);



let i=0;


const next=()=>{
   if(sng<=4){
    setSng(sng=>sng+1)
}
else{
    setSng(0);
}
    
}

var x=document.getElementById("audio");

const plays=()=>{
x.play();
}

const pauses=()=>{
x.pause();
}








//this is for Calculator
const [ans, setAns] = useState('');

function solve(e) {
    setAns(p => p + e.target.value);
    console.log(ans);
}


function result(e) {
    setAns(p => eval(p));
}

// let [state,dispatch]=useReducer(reducer,0)

    return (


        <>
       <div className='container'>
        <div className='row'>
            <div className='col-md-4'>

            <center>  <div className='shadow mt-5' style={{height:'362px',width:'300px',backgroundColor:'#AEC2B6',padding:'10px',borderRadius:'15px 15px'}}>
            
            <form className='form-control'style={{backgroundColor:'#EEEEEE'}} name='form'>
                <input type="text" disabled value={ans} name='clctr' size={28}  style={{backgroundColor:'white',padding:'5px',borderRadius:'5px 5px',marginBottom:'10px'}}></input>
          

<div style={{display:'grid',gridTemplateColumns:'auto auto auto auto',justifyContent:'space-between',rowGap:'17px'}}>
    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve} value="mc">mc</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve}  value="mr">mr</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve} value="m-">m-</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve} value="m+">m+</button></div>

    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve} value="Ac" >Ac</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve} value="Root">Root</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns1" onClick={solve} value="%">%</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns3" onClick={solve} value="/">/</button></div>

    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="7">7</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="8">8</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="9">9</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns3" onClick={solve} value="*">x</button></div>

    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="4">4</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="5">5</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="6">6</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns3" onClick={solve} value="-">-</button></div>

    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="1">1</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="2">2</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="3">3</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns3" onClick={solve} value="+" >+</button></div>

    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="0">0</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value=".">.</button></div>
    <div><button className='btn btn-sm btn-secondary' id="btns2" onClick={solve} value="+/-">+/-</button></div>
    <div><button className='btn btn-sm btn-secondary' style={{backgroundColor:'#54B435',width:'55px',color:'black',fontWeight:'700'}} onClick={result} value="=">=</button></div>

    

</div>

            </form>
            
            </div>
            </center>
            </div>





            <div className='col-md-4'>Middle</div>








            <div className='col-md-4'>      
            Available songs are:{song.length}
            <div style={{height:'400px',width:'100%',backgroundColor:'cadetblue',marginTop:'40px',borderRadius:'50%'}}>
               <audio id='audio'  controls>
                <source  src={song[sng]}  type="audio/ogg"/>
               </audio>

               <button onClick={next}>Next Audio</button>
               <button onClick={plays}>Play</button>
               <button onClick={pauses}>Pause</button>
               
            </div>


            </div>
        </div>
       </div>



            
          





        </>

    )
                }

                    export default Prctc2;