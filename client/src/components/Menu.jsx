import React from 'react';
import MenuItem from './MenuItem.jsx'

const Menu = (props) => {
    return (
        <div>
            {props.data.map((item, i) => {
               return <MenuItem item = {item} key = {i}/>
            })}
        </div>
    )
}

export default Menu;