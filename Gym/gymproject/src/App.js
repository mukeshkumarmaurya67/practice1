import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import Usercart from "./usercart";
import Myprofile from "./myprofile";
import About from "./about";
import Register from "./register";
import Login from "./login";
import Gallerys from "./Gallerys";
import Emailsupport from "./Emailsupport";
import Callus from "./Callus";
function UserApp () {
return (
<>
<HashRouter>
   <Routes>
      <Route exact path="register" element={
      <Register />
      } />
      <Route exact path="/" element={
      <Home />
      }  />
      <Route exact path="/gallery" element={
      <Gallerys />
      }  />
      <Route exact path="/aboutpath" element={
      <About />
      } />       
      <Route exact path="/contactpath" element={
      <Contact />
      } />
      <Route exact path="/emailsupport" element={
      <Emailsupport />
      } />
      <Route exact path="/callus" element={
      <Callus />
      } />
      <Route exact path="/cartpath" element={
      <Usercart />
      } />
      <Route exact path="/profilepath" element={
      <Myprofile />
      } />
      <Route exact path="/registerpath" element={
      <Register />
      } />
      <Route exact path="/login" element={
      <Login />
      } />
   </Routes>
</HashRouter>
</>
)
}
export default UserApp;