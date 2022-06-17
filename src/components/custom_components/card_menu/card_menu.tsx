import React from 'react';
import './card_menu.scss'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import A_drnk from '../../../images/custom_comps/menu_popup/a_drnk.jpg'
import Popup from 'reactjs-popup';

interface IProps{
  food:IFood;
  onAdd(position:IFood): void;
}

export default function Card_menu (props:IProps) {
  const {food, onAdd} = props
  return (
      <Popup nested className='popup_card'  trigger={
        <div className="card_menu">
           <img src={food.picture}/> 
          <p>{food.name}</p>
        </div>} modal>
      <span>
          <div className="meal_popup">
                <div className="meal_popup_main_section">
                  <h2>{food.type}</h2>
                  <div className="meal_popup_content">
                     <img src={food.picture} alt="" /> 
                    <div className="meal_popup_description">
                      <p className='meal_topic'>{food.name}</p>
                      <p>{food.description}</p>
                    </div>
                  </div>
                  <div className="buy_btn"> 
                      <button onClick={() => onAdd(food)}>{food.price}$</button>                     
                  </div>
                </div>
                <div className="meal_popup_secondary_section">
                        <h2>Nutritional Information</h2>
                        <Accordion allowZeroExpanded className='meal_accordion'>
                          <AccordionItem>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                      <p>Nutrition Summary</p>
                                      <img src="" alt="" />  
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                  <span>
                                      <ul>
                                        <li>
                                          <p>475Cal.<br/>Calories</p>
                                        </li>
                                        <li>
                                          <p>16g<br/>Total Fat</p>
                                        </li>
                                        <li>
                                          <p>44g<br/>Total Carbs</p>
                                        </li>
                                        <li>
                                          <p>33g<br/>Protein</p>
                                        </li>
                                      </ul>
                                  </span>
                              </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                    <p>Ingredients</p>
                                    <img src="" alt="" />
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                  <span>
                                    <p className='ingredients'>{food.ingrediends}</p>
                                  </span>
                              </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                </div>
          </div>
      </span>
    </Popup>
)
}

