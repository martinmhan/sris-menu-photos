import React from 'react';
import MenuItem from './MenuItem.jsx'
import MenuSection from './MenuSection.jsx'

    
const Menu = (props) => {

    return (
        <div>
            {console.log(props.menu_types)}
  
            {props.data.map((item, i) => {
               return <MenuItem item = {item} key = {i}/>
            })} 
        </div>
    )
}

export default Menu;

