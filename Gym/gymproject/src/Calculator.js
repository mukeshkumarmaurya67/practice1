import React, { useState, useEffect, useContext, useReducer } from 'react';

import beep from './beep.mp3';
// import {FirstName} from './about';


const Prctc3 = () => {
  let start=()=>{
    let b=document.getElementById("audio");
    b.onplay();
  }

  const reducer = (display, action) => {


    switch (action) {
      case '1':
        return display += 1
        start();
      case '2':
        return display += 2
      case '3':
        return display += 3
      case '4':
        return display += 4
      case '5':
        return display += 5
      case '6':
        return display += 6
      case '7':
        return display += 7
      case '8':
        return display += 8
      case '9':
        return display += 9
      case '0':
        return display += 0
      case '+':
        return display += '+'
      case '-':
        return display += '-'
      case '*':
        return display += '*'
      case '/':
        return display += '/'
      case '=':
        return eval(display)
      case 'CE':
        return (display * '0')
        
        
      case 'root':
        return Math.sqrt(display)
    }

  }


  let [display, dispatch] = useReducer(reducer, [])



  return (
    <>
      <center><div id='main' style={{ backgroundColor: '#FFACAC', width: '300px', borderRadius: '15px 15px',padding:'10px' }}>
        <div style={{
          margin: '10px 0px',
          height: '60px',
          textAlign: 'end',
          lineHeight: '40px',
          padding: '10px',
          color: 'red',
          fontWeight: '600',
          backgroundColor: '#FFD4D4',
          borderRadius:'15px 15px',
          fontSize:'40px',
          overflow:'hidden',


        }}>{display}</div>

        <div id='clcbtn1'>
          <div><button>MC</button></div>
          <div><button>MR</button></div>
          <div><button>M+</button></div>
          <div><button>M-</button></div>
          <div><button>MS</button></div>
          <div><button>M<sup>-</sup></button></div>
        </div>



        <div id='clcbtn' style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', rowGap: '10px', padding: '20px 0px' }}>

          <div><button class="btndsgn">%</button></div>
          <div><button class="btndsgn" onClick={() => dispatch("CE")}>CE</button></div>
          <div><button class="btndsgn">AC</button></div>
          <div><button class="btndsgn" onClick={() => dispatch("/")}>/</button></div>

          <div><button class="btndsgn" onClick={() => dispatch("root")}>&#8730;</button></div>
          <div><button class="btndsgn">(</button></div>
          <div><button class="btndsgn">)</button></div>
          <div><button class="btndsgn">x <sup>y</sup></button></div>


          <div><button onClick={() => dispatch("7")}>7</button></div>
          <div><button onClick={() => dispatch("8")}>8</button></div>
          <div><button onClick={() => dispatch("9")}>9</button></div>
          <div><button class="btndsgn" onClick={() => dispatch("*")}>*</button></div>


          <div><button onClick={() => dispatch("4")}>4</button></div>
          <div><button onClick={() => dispatch("5")}>5</button></div>
          <div><button onClick={() => dispatch("6")}>6</button></div>
          <div><button class="btndsgn" onClick={() => dispatch("-")}>-</button></div>


          <div><button onClick={() => dispatch("1")}>1</button></div>
          <div><button onClick={() => dispatch("2")}>2</button></div>
          <div><button onClick={() => dispatch("3")}>3</button></div>
          <div><button class="btndsgn" onClick={() => dispatch("+")}>+</button></div>


          <div><button>,</button></div>
          <div><button onClick={() => dispatch("0")}>0</button></div>
          <div><button>.</button></div>
          <div><button style={{ borderRadius: '5px 5px', height: '40px', backgroundColor: 'gray' }} onClick={() => dispatch('=')}>=</button></div>

        </div>

      </div></center>

      <span><audio controls id='audio'>
        <source src={beep} type="audio/mpeg" ></source>
        </audio></span>
        <button onClick={start}>play</button>
    </>
  )
}

export default Prctc3;