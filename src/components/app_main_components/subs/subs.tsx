import React from 'react';
import './subs.scss'

export default function Subs () {
    return (
        <div className="container">
              <div className="subs">
                <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                <p>Limited time offer for this month. No credit card required.</p>
                <div className="subs_input">
                <input className='sub_inp' type="text" name="" id="" placeholder='Email Address Here' />
                <input type="button" value="Subscribe" />
                </div>
              </div>
            </div>
    )
}

