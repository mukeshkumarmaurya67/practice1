import Mynav from "./mynav";
import React, { createContext ,useEffect,useRef,useState} from 'react';
import Prctc3 from "./Calculator.js";
import Prctc1 from "./prctc1";
import Prctc2 from "./Prctc2";
import Modalpopup from "./Modalpopup";
import Videoplayer from "./Videoplayer";




// const FirstName = createContext();
const About = () => {

  return (
    <>
      <Mynav />
      <h3 className="text text-center text-danger">This page is only for testing purpose</h3>
     

     <hr/>
     <Prctc1 />
  <Videoplayer />
     
    </>
  )
}
export { About as default};
