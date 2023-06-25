import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Admin1stpage from "./admin1stpage";
import Admin2ndpage from "./admin2ndpage";
import Admin3rdpage from "./admin3rdpage";
import Dashboard from "./dashboard";
import Gallery from "./gallery";

function Adminapp() {
  return (
    <>
    
   <HashRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard /> } />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/firstpage" element={<Admin1stpage />} />
      <Route exact path="/secondpage" element={<Admin2ndpage />} />
      <Route exact path="/thirdpage" element={<Admin3rdpage />} />

    </Routes>
   </HashRouter>
    
    
    </>
    
  )
}

export default Adminapp;
