import React from 'react';
import ReactDOM from 'react-dom';
import MenuApp from "./MenuApp.jsx";
import Photo from "./components/Photo.jsx"


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    
    render() {
      
      return (
        <div>
            <Photo />
            <MenuApp />
        </div>
      );
    }
  }

  export default App;