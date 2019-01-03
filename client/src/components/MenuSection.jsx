import React from 'react';
import MenuItem from './MenuItem.jsx'
import styles from '../../dist/styles.css'

    
const MenuSection = (props) => {

    return (
        
        <div>
            <div className={styles.menusectiontitle}>
            {props.data.length === 0 ? '' : props.data[0].menu_section_name}
            </div>
            
            <div className = {styles.menusection} > 
                {props.data.map((item, i) => {
                return <MenuItem item = {item} key = {i}/>
                })}
            </div>
            
        </div>
    )
}

export default MenuSection;