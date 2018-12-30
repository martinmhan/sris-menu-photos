import React from 'react';
//import '../../dist/styles.css';

const MenuItem = (props) => {
    return (
        <div className='menuitem'>
            <br></br>
            <b> {props.item.rest_name + " - " + props.item.menu_type_name} </b>
            <br></br>
            {props.item.menu_item_name + " - " + props.item.menu_item_price}
        </div>
    )
}

export default MenuItem;