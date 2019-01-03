import React from 'react';
//import '../../dist/styles.css';

const MenuItem = (props) => {
    return (
        <div className='menuitem'>
            {props.item.menu_item_name}
            <br></br>
            Made with Cheese and Eggs
            <div className='menuprice'>
                {props.item.menu_item_price}
            </div>
        </div>
        
    )
}

export default MenuItem;