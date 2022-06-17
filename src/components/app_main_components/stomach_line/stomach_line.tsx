import React from 'react';
import './stomach_line.scss'

import stomach_line_img from '../../../images/app_main/stomach_line/stomach_line.png'
import play from '../../../images/app_main/stomach_line/play.svg'

export default function Stomach_line () {
    return (
        <div className="stomach_line">
              <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odiofinibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <div className="story">
                <img src={play} alt="" />
                <p>Watch Our Story</p>
              </div>
            </div>
    )
}

