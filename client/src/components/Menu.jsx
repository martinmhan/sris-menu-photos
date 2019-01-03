import React from 'react';
import MenuItem from './MenuItem.jsx'
import MenuSection from './MenuSection.jsx'

    
const Menu = (props) => {
    // const uniqueSections = [...new Set(props.data.map(obj => obj.menu_section_num))];
    // console.log("unique", uniqueSections)
    // let filtered_data_array = []
    // for (let i = 0; i<uniqueSections.length; i++) {
    //     let filtered_data = props.data.filter(obj => obj.menu_section_num === uniqueSections[i])
        
    // }
    // console.log("filtered", filtered_data)

    // let gappy = props.data.filter(obj => obj.menu_section_num === 0)
    // console.log("Filtered",gappy)
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

// {props.data
//     .filter(obj => obj.menu_section_num === 0)
//     .map((item, i) => {
//         return <MenuItem item = {item} key = {i}/>
//     })}


// {props.data
//     .filter(obj => obj.menu_section_num === 1)
//     .map((item, i) => {
//         return <MenuItem item = {item} key = {i}/>
//     })}


// {props.data
//     .filter(obj => obj.menu_section_num === 2)
//     .map((item, i) => {
//         return <MenuItem item = {item} key = {i}/>
//     })}