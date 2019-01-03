import React from 'react';
import Menu from './Menu.jsx'
import axios from 'axios';
import MenuSection from './MenuSection.jsx'
class MenuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_data: ['hello'],
      menu_types: {},
      rest_id: 2,
      menu_state: 0,
      filtered_menu_data: ["filtered"],
    };
  }

  componentWillMount() {
    this.filterDatabyMenuType()
    this.getMenus(this.state.rest_id)
    this.findUniqueMenuTypes()
    
  }

  findUniqueMenuTypes() {
    axios
      .get(`/api/menus/${this.state.rest_id}`)     
      .then(({ data }) => this.retrieveUniqueMenuTypes(data))
      .then((data) => this.setState({menu_types: data}));
  }

  filterDatabyMenuType() {
    axios
    .get(`/api/menus/${this.state.rest_id}`)     
    .then(({ data }) => data.filter(obj => obj.menu_type_num === this.state.menu_state))
    .then((data)=> this.setState({filtered_menu_data: data}))
  }


  getMenus(rest_id) {
    axios
      .get(`/api/menus/${rest_id}`)     
      .then(({ data }) => this.setState({menu_data: data}));
  }; 



  retrieveUniqueMenuTypes(menu_data) {
    let unique_menus_set = new Set();
    let unique_menus_dict = {};
    for (let i = 0; i < menu_data.length; i++) {
	    if (!unique_menus_set.has(menu_data[i]["menu_type_num"])) {
		    unique_menus_set.add(menu_data[i]["menu_type_num"])
		    unique_menus_dict[menu_data[i]["menu_type_num"]] = menu_data[i]["menu_type_name"]
      }
    }
   return [unique_menus_dict]
  }
  breakfastHandler(e) {
    this.setState({menu_state: 0})
    this.filterDatabyMenuType()
  }
  lunchHandler(e) {
    this.setState({menu_state: 1})
    this.filterDatabyMenuType()
  }
  dinnerHandler(e) {
    this.setState({menu_state: 2})
    this.filterDatabyMenuType()
  }


  // const uniqueSections = [...new Set(props.data.map(obj => obj.menu_section_num))];
  // console.log("unique", uniqueSections)
  // filtered_data_array = []
  // for (let i = 0; i<uniqueSections.length; i++) {
  //     let filtered_data = props.data.filter(obj => obj.menu_section_num === uniqueSections[i])
      
  // }
  render() {
    
    return (
      <div>
        <div className='sectionHeader'>
                <b>Menu</b>
        </div>
        <div className = 'menu-section-title'> 
        <button className="button-menu-link" onClick={e => this.breakfastHandler(e)}>Breakfast</button>
        <button className="button-menu-link" onClick={e => this.lunchHandler(e)}>Lunch</button>
        <button className="button-menu-link" onClick={e => this.dinnerHandler(e)}>Dinner</button>
        </div>

        {/* <Menu 
        data = {this.state.filtered_menu_data}
        menu_types = {this.state.menu_types}
        menu_state = {this.state.menu_state}
        />  */}
        
        <MenuSection data = {this.state.filtered_menu_data.filter(obj => obj.menu_section_num === 0)} />
        <MenuSection data = {this.state.filtered_menu_data.filter(obj => obj.menu_section_num === 1)} />
        <MenuSection data = {this.state.filtered_menu_data.filter(obj => obj.menu_section_num === 2)} />


      </div>
    );
  }
}

export default MenuApp;
