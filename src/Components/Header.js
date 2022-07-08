import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div id='main'>
    <Navbar/>
        <div className='name'>
            <h1> <span>Launch Your App</span>With Creativity</h1>
            <p className='details'>Here we launched your fresh new app which represent your creavitiy.</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    
    </div>
  )
}
