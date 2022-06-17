import React from 'react';
import Popup from 'reactjs-popup';
import './shopping_cart.scss'

import Cart from '../../../images/layout/cart/cart.svg'
import Trash_can from '../../../images/layout/cart/rubbish_bin.svg'
import { Interface } from 'readline';
import { ProgressPlugin } from 'webpack';
import Cart_item from '../../menu_components/cart_pos_item/cart_pos_item';
import Card_menu from '../../custom_components/card_menu/card_menu';

interface IProps{
    className:string;
    food: IFood[];
    cartItems: IFood[];
}

export default function Shopping_cart (props:IProps) {
    const {cartItems} = props;
    const totalPrice = cartItems.reduce((a, c) => a + c.price, 0);
    return (
        <div className="shopping_cart">
            <Popup nested   trigger={<img className={props.className} src={Cart} alt="" />} modal>
      <span className='popup_cart'>
        <div className="cart_header">
            <h2>Finish Your Order</h2>
            <button >
                <img src={Trash_can} alt="" />
                <p>Empty Shopping Cart</p>
            </button>
        </div>
        <div className="cart_positions">
                    {props.cartItems.map(item=>(
                    <Cart_item   food={item} />
                ))}
            {cartItems.length === 0 && <div className='empty_cart'><p>Cart Is Empty</p></div>}
        </div>
        
        {cartItems.length !== 0 && (
            <div className="cart_checkout">
                     <p>Total Price</p>
                     <div className="checkout_btn">
                         <div className='tot_price'>{totalPrice.toFixed(2)}$</div>
                         <button>Check Out</button>
                         
                     </div>
                     </div>
                )}
           
        
            
      </span>
    </Popup>
        </div>
    )
}

