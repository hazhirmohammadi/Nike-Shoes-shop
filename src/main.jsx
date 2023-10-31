import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import AboutUs from "./components/AboutUs.jsx";
import Home from "./components/Home.jsx";
import ContactUs from "./components/ContactUs.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>

       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<AboutUs/>}/>
             <Route path="/contact-us" element={<ContactUs/>}/>
          </Routes>
       </BrowserRouter>
    </React.StrictMode>
)