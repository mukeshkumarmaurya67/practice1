import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import'./index-responsive.css';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import UserApp from './App';
import reportWebVitals from './reportWebVitals';
import Adminapp from './adminapp';
const root = ReactDOM.createRoot(document.getElementById('root'));


if(localStorage.getItem("adminid") == null ){
  root.render(
      <UserApp/>
  );
}else{
  root.render(
    <Adminapp />
);
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
