import React from 'react';
import MenuItem from './MenuItem.jsx'

    
const MenuSection = (props) => {

    return (
        
        <div>
            <div className='menu-section-title'>
            {props.data.length === 0 ? '' : props.data[0].menu_section_name}
            </div>
            
            <div className = "menu-section" > 
                {props.data.map((item, i) => {
                return <MenuItem item = {item} key = {i}/>
                })}
            </div>
            
        </div>
    )
}

export default MenuSection;