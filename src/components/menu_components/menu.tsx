import React from 'react';
import './menu.scss'

import Menu_content from './menu_content/menu_content';
import Menu_sidebar from './menu_sidebar/menu_sidebar';

interface IProps {
    food: IFood[];
    onAdd(position:IFood): void;
}

export default function Menu (props:IProps) {
    return (
        <div className="container">
            <div className="app_menu">
                <Menu_sidebar className='menu_sidebar' />
                <Menu_content onAdd={props.onAdd}  food={props.food} className='menu_content' />
            </div>
        </div>
    )
}

