import React from 'react';
import './footer.scss'

import twitter from '../../../images/layout/footer/twitter.svg'
import facebook from '../../../images/layout/footer/facebook.svg'
import inst from '../../../images/layout/footer/inst.svg'

export default function Footer () {
    return (
        <footer>
                <ul className='ul_ft1'>
                  <li><a href="">Register</a></li>
                  <li><a href="">Forum</a></li>
                  <li><a href="">Affiliate</a></li>
                  <li><a href="">FAQ</a></li>
                </ul>
                <ul className='ul_ft2'>
                  <li><a href=""><img src={facebook} alt="" /></a></li>
                  <li><a href=""><img src={twitter} alt="" /></a></li>
                  <li><a href=""><img src={inst} alt="" /></a></li>
                </ul>
                <p>© 2022. FoodDX. All rights reserved.</p>
            </footer>
    )
}

