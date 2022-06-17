import React from 'react';
import './about_us.scss'

import tick_right from '../../../images/global/tick_right.svg'
import we_pride_img from '../../../images/app_main/about_us/we_pride_img.png'
import tick from '../../../images/global/tick.svg'
import we_make_img from '../../../images/app_main/about_us/we_make_img.png'
import leaves from '../../../images/app_main/about_us/leaves.png'

export default function About_us () {
    return (
        <div className="container">
            <section className='about_us' id='about_us'>
              <div className="we_pride">
                <img src={we_pride_img} alt="" />
                <div className="we_pride_txt">
                  <h2>We pride ourselves on making real food from the best ingredients.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
                  <button>Learn More <img src={tick_right} alt="" /> </button>
                </div>
              </div>
              <div className="we_make">            
                <div className="we_make_txt">
                  <h2>We make everything by hand with the best possible ingredients.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="we_make_ticks">
                    <div className="tick1">
                      <img src={tick} alt="" />
                      <p>Etiam sed dolor ac diam volutpat.</p>
                    </div>
                    <div className="tick2">
                      <img src={tick} alt="" />
                      <p>Etiam sed dolor ac diam volutpat.</p>
                    </div>
                    <div className="tick3">
                      <img src={tick} alt="" />
                      <p>Etiam sed dolor ac diam volutpat.</p>
                    </div>
                  </div>
                  <button>Learn More <img src={tick_right} alt="" /></button>
                </div>
                <div className="we_make_img">
                  <img className='leaves' src={leaves} alt="" />
                </div>
              </div>
              
            </section>
            </div>
    )
}

