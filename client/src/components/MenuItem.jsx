import React from 'react';
import '../../dist/styles.css';

const MenuItem = (props) => {
    // console.log('List Item Props', props)
    return (
        <div>
            <br></br>
            <b className="DottedBox"> {props.item.rest_name + " - " + props.item.menu_type_name} </b>
            <br></br>
            {props.item.menu_item_name + " - " + props.item.menu_item_price}
        </div>
    )
}

export default MenuItem;