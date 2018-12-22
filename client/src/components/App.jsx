import React from 'react';
import Menu from './Menu.jsx'

import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_data: ['hello'],
    };
  }

  componentWillMount() {
    this.getItems(2);
  }

  componentDidMount() {
    // console.log(this.state.menu_data)
  }


  getItems(rest_id) {
    axios
      .get(`/api/${rest_id}`)
      //.then(({ data }) => console.log(data))
      .then(({ data }) => this.setState({menu_data: data}))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
          Hello from App

          {/* {Object.values(this.state.menu_data[0])} */}
        <form action="">
          <input type="text" />
          <input type="text" />
          <button type="submit">add </button>
        </form>
        <Menu data = {this.state.menu_data}/> 
      </div>
    );
  }
}

export default App;
