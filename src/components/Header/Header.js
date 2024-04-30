import React from 'react';
import logo from '../../assets/img/eda.png';
import './Header.css';
import { Link } from 'react-router-dom';



function Header() {
  const nav_title=[{
    path:'/',display:'Home'
  },  {path:'/Services',display:'Service'},{path:'/Cources',display:'Cource'},{path:'/About',display:'About US'},
]
  return (
    <header className='header'> 
    <div className='container'>
      <div className='nav_container'>
        <div className='logo'>
          <div className='logo-img'>
            <img src={logo} alt=''/>

          </div>
            <h2>Learn Lab</h2>
         
          </div>
          <div className='navigation'>
            <ul className='menu'>
            { 
              nav_title.map((item) => (
                <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
            ))}

          
          </ul>

        </div>
      </div>
    </div>
    </header>
  )
}

export default Header;