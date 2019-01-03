import React from 'react';
import styles from '../../dist/styles.css'

const MenuItem = (props) => {
    return (
        <div className={styles.menuitem}>
            {props.item.menu_item_name}
            <br></br>
            Made with Cheese and Eggs
            <div className={styles.menuprice}>
                {props.item.menu_item_price}
            </div>
        </div>
        
    )
}

export default MenuItem;