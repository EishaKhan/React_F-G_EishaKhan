import React from 'react';
import { HashRouter,  NavLink, Route } from 'react-router-dom';
import '../components/Header.css'
import Form from '../Form';
import ContactForm from './ContactForm';

function Header(props) {
    return (
        <HashRouter>
        <div>
            <ul className="header">
                <li><NavLink to={ '/ContactForm' } style={{fontSize:"25px"}}>Form</NavLink></li>
                <li><NavLink to={ '/Form' }  style={{fontSize:"25px"}}>Table</NavLink></li>
            </ul>
            <div className="content">
                <Route  path="/contactform" component={ContactForm}/>
                <Route path="/form" component={Form}/>
            </div>
            
            
    
        </div>
        </HashRouter>
    );
}

export default Header;