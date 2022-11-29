import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.js"
import "jquery/dist/jquery"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css"
import "./style.css";
import { Home } from './components/Header/Home/home';
import { Portfoilo } from './components/Portfolio/portfolio';
import { Navbar } from './components/Header/Navbar/Navbar';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Main } from './components/Main/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([ 
  {path:"",element: <Main/> ,children:[
    { path:"" , element : <App/> },
    {path:"Home" ,element : <App/>},
    {path:"PORTFOLIO" ,element : <Portfoilo/> },
    {path:"About" ,element : <About/> },
    {path:"Contact" ,element : <Contact/> },
    {path:"*" ,element : <h2 className='text-center'>Error 4 0 4 , page not found </h2> }
  ]},


])

root.render(

   <RouterProvider router={router}/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
