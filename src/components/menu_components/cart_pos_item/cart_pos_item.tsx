import React from 'react';
import './cart_pos_item.scss'



interface IProps{
    food:IFood;
}

export default function Cart_item (props:IProps) {
    return (
        <div className="cart_item">
            <div className="cart_item_name">
                <img src={props.food.picture} alt="" />
                <p>{props.food.name}</p>
            </div>
            <div className="cart_item_price">
                <p>{props.food.price}$</p>
                <input type="number" placeholder='1' min="1"/>
            </div>
        </div>
    )
}

