import React, { useEffect, useState,dispatch } from 'react'





const Practicec3=()=>{

const reducer=()=>{

}

  
//[state,dispatch]=useReducer(reducer,initialvalue)








//   let[abc,setAbc]=useState(1);

// const click1=()=>{

// setAbc(abc+1)

// }



// let etc=0;

// const click2=()=>{

// }

// let [mcounter,setMcounter]=useState(7);
// useEffect(()=>{

//   setInterval(click1, setMcounter(mcounter+1),7000)
//   setInterval(()=>mcounter+1,7000)

// },)

  return (
  //  <>
  //  <h1>My valu-1 is : {abc}</h1>
  //  <h1>My valu is-2 : {etc}</h1>
  //  <button onClick={click1}>click me 1</button>

  //  <button onClick={click2} >Click me 2</button>

  //  <h2 className='text text-danger'>Main Counter=>:<span className='text text-success'>{mcounter}</span></h2>
  //  </>
  // <>
  // <ul className='nav nav-pill justify-content-evenly'>
  //   <li className='nav-item'><a className='nav-link' >Home</a></li>
  //   <li className='nav-item dropdown'><a className='nav-link dropdown-toggle' data-bs-toggle="dropdown" href="#" >Blog</a>
  //   <ul className='dropdown-menus'>

  //     <li><a  className='drowdown-item nav-link'>Item-1</a></li>
      
  //     <li><a  className='drowdown-item nav-link'>Item-2</a></li>
      
  //     <li><a  className='drowdown-item nav-link'>Item-3</a></li>
  //     <li><a  className='drowdown-item nav-link'>Item-4</a></li>

  //   </ul>
    
  //   </li>
  //   <li className='nav-item'><a className='nav-link' >Career</a></li>
  //   <li className='nav-item'><a className='nav-link'  >Contact</a></li>
  //   <li className='nav-item'><a className='nav-link' >Help</a></li>

  // </ul>
  
  // </>

  <>
  
  
  <button onClick={()=>dispatch('increment')}>Click me</button>
  <button onClick={()=>dispatch('decrement')}>Click me</button>
  
  <h3>My name is :a</h3>
  
  </>
  )
}

export default Practicec3;