import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './components/head.js'

/// create header element with nested nav element 
// inside nav hav nested image element 
// add h1 e,lement below header but above order list
// belower list but footer
const root = ReactDOM.createRoot(document.getElementById('root'))

function Page(){
  return (
  <div>
    <Header />
    <App />

  </div>
)}
// const root  = document.getElementById('root')
// root.append(JSON.stringify(newdiv))
root.render(
  <Page /> 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
