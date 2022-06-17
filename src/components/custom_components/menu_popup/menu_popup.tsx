import React from 'react';
import './menu_popup.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Pizza from '../../../images/custom_comps/menu_popup/pizza.jpg'
import Salad from '../../../images/custom_comps/menu_popup/salad.jpg'
import Burger from '../../../images/custom_comps/menu_popup/burger.jpg'
import Sushi from '../../../images/custom_comps/menu_popup/sushi.jpg'
import BBQ from '../../../images/custom_comps/menu_popup/bbq.jpg'
import Snacks from '../../../images/custom_comps/menu_popup/snacks.jpg'
import Dessert from '../../../images/custom_comps/menu_popup/dessert.jpg'
import Breakfast from '../../../images/custom_comps/menu_popup/breakfast.jpg'
import UA_cuis from '../../../images/custom_comps/menu_popup/ua_cuis.jpg'
import H_drnk from '../../../images/custom_comps/menu_popup/h_drnk.jpg'
import C_drnk from '../../../images/custom_comps/menu_popup/c_drnk.jpg'
import A_drnk from '../../../images/custom_comps/menu_popup/a_drnk.jpg'
import { NavLink } from 'react-router-dom';

interface IProps{
    name:string;
    className:string;
}

const Menu_popup = (props:IProps) => (
    <Popup trigger={<button className={props.className}> {props.name} </button>} modal>
      <span>
          <div className="meals">
              <h2>Our Menu</h2>
              <div className="menu_meals">
                    <div className="pizza">
                        <p>Pizza</p>
                        <img src={Pizza} alt="" />
                    </div>
                    <div className="salad">
                        <p>Salads</p>
                        <img src={Salad} alt="" />
                    </div>
                    <div className="burger">
                        <p>Burgers</p>
                        <img src={Burger} alt="" />
                    </div>
                    <div className="sushi">
                        <p>Sushi</p>
                        <img src={Sushi} alt="" />
                    </div>
                    <div className="bbq">
                        <p>BBQ</p>
                        <img src={BBQ} alt="" />
                    </div>
                    <div className="snacks">
                        <p>Snacks</p>
                        <img src={Snacks} alt="" />
                    </div>
                    <div className="dessert">
                        <p>Desserts</p>
                        <img src={Dessert} alt="" />
                    </div>
                    <div className="breakfast">
                        <p>Breakfasts</p>
                        <img src={Breakfast} alt="" />
                    </div>
                    <div className="ua_cuis">
                        <p>Ukrainian <br/> <span>Cuisine</span> </p>
                        <img src={UA_cuis} alt="" />
                    </div>
                    <div className="h_drnk">
                        <p>Hot <br/> <span> Drinks</span></p>
                        <img src={H_drnk} alt="" />
                    </div>
                    <div className="c_drnk">
                        <p>Cold <br/> <span>Drinks</span></p>
                        <img src={C_drnk} alt="" />
                    </div>
                    <div className="a_drnk">
                        <p>Alcohol <br/> <span>Drinks</span></p>
                        <img src={A_drnk} alt="" />
                    </div>
              </div>
          </div>
          <div className="menu_popup_btns">
          <NavLink to='/menu'>
              <button className='menu_popup_btn'>Full Menu</button>
          </NavLink> 
          {/* <button className='menu_close_btn'>

              Close
          </button> */}
          </div>
      </span>
    </Popup>
  );

export default Menu_popup;
