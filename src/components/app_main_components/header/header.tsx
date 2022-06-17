import React from 'react';
import './header.scss'
import Menu_popup from '../../custom_components/menu_popup/menu_popup'

import shopping_bag from '../../../images/app_main/header/shopping_bag.svg'
import tick_right_black from '../../../images/global/tick_right_black.svg'
import header_meal from '../../../images/app_main/header/header_meal.png'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <div className="container">
            <header id='main_header'>
              
              <div className="header_content">
                <div className="header_txt">
                  <h2>
                  Order food from favourite restaurants near you.
                  </h2>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. 
                  </p>
                  <div className="header_btns">
                    <Menu_popup name='Order Now' className='header_menu_popup' />
                    <NavLink to='/menu'><button className='header_btn1'>Learn More {'>'}</button></NavLink> 
                  </div>
                </div>
                <img src={header_meal} alt="" />
              </div>
              
            </header>
            </div>
           
    )
}

