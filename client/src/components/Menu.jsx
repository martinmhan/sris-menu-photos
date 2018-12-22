import React from 'react';
import MenuItem from './MenuItem.jsx'

const Menu = (props) => {
    // console.log('List Props', props)
    return (
        <div>
            {/* <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem /> */}
            {/* <MenuItem /> */}


            {props.data.map((item, i) => {
               return <MenuItem item = {item} key = {i}/>
                // console.log(item)
            })}


        </div>
    )
}

export default Menu;