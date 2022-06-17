import React from 'react';
import Menu_popup from '../../custom_components/menu_popup/menu_popup';
import './nav.scss'

import fooddx_svg from '../../../images/layout/nav/fooddx.svg'
import { NavLink } from 'react-router-dom';

export default function Nav () {
    return (
        <section className='navbar'>
        <nav>
                <img src={fooddx_svg} alt="" />

                <div className="ul_btn">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="#about_us">About Us</a></li>
                    <li><Menu_popup name='Exprole Foods' className='navbar_menu_popup' /></li>
                    <li><a href="#testimonials">Reviews</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                <button className='contact'>
                  Contact us
                </button>
                </div>

              </nav>
        </section>
    )
}