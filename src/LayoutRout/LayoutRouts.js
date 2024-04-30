import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Plans from '../components/pages/plans/Plans';
import Cources from '../components/pages/Cources/Cources';
import AboutUs  from '../components/pages/AboutUs/aboutUs';
import ContactUs from '../components/pages/ContactUS/ContactUs';
import SupportUs from '../components/pages/SupportUs/SupportUs';

function LayoutRouts() {
  return (
    
        <Router>
<Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Learn-Lab' element={<Home/>}/>
                <Route path='/Services' element={<Plans/>}/>
                <Route path='/Cources' element={<Cources/>}/>
                <Route path='/About' element={<AboutUs/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='/support' element={<SupportUs/>}/>
            </Routes>
            <Footer/>
        </Router>
       
  )
}

export default LayoutRouts