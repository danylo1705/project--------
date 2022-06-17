import React from 'react';
import './our_menu.scss'
import Menu_popup from '../../custom_components/menu_popup/menu_popup';

import our_menu_img1 from '../../../images/app_main/our_menu/our_menu_img1.png'
import our_menu_img2 from '../../../images/app_main/our_menu/our_menu_img2.png'
import our_menu_img3 from '../../../images/app_main/our_menu/our_menu_img3.png'

export default function Our_menu () {
    return (
        <div className="container">
                <div className="our_menu">
                  <h2>Menu That Always Make You Fall In Love</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <div className="our_menu_images">
                      <img className='our_menu_img1' src={our_menu_img1} alt="" />
                      <img className='our_menu_img2' src={our_menu_img2} alt="" />
                      <img className='our_menu_img3' src={our_menu_img3} alt="" />
                  </div>
                  <Menu_popup name='Menu' className='our_menu_popup' />
                </div>
            </div>
    )
}

