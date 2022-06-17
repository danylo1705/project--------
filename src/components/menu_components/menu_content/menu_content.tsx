import React from 'react';
import Card_menu from '../../custom_components/card_menu/card_menu';
import './menu_content.scss'

interface IProps{
    className:string;
    food: IFood[];
    onAdd(position:IFood): void;
}

export default function Menu_content (props:IProps) {
    return (
        <div className={props.className}>
        <div className="menu_content">
            <h2>Full Menu</h2>
            <div className="menu_content_positions">
                {props.food.map(item=>(
                    <Card_menu onAdd={props.onAdd} key={item.id} food={item} />
                ))}
            </div>
        </div>
        </div>
    )
}
