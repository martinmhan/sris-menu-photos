import React from 'react';
import ReactDOM from 'react-dom';
import MenuApp from "./MenuApp.jsx";
import Photo from "./components/Photo.jsx"
import View from "./components/View.jsx";
import styles from '../../dist/styles.css'



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        close: true,
        rest_id: 0,
        currentPhoto: 0
      };
      this.handleEscape = this.handleEscape.bind(this);
      this.handlePictureClick = this.handlePictureClick.bind(this);
      this.renderView = this.renderView.bind(this);
    }

    handleEscape(e) {
        e.preventDefault()
        this.setState({close: true})
      
    }

    handlePictureClick(e,image_num) {
        
        e.preventDefault()
        
        this.setState({
            currentPhoto: image_num,
            close: false,
        })
        
    }
    
    renderView() {
        if (this.state.close === false) {
            return <View  
            photoID = {this.state.currentPhoto} 
            restID = {this.state.rest_id}
            handleEscape ={this.handleEscape}/>
        } else {
            return (
                <div className = {styles.appcontainer}>    
                    <Photo 
                        handlePictureClick = {this.handlePictureClick}/>
                    <MenuApp />
                </div>
            )
        }
    }
    
    render() {
      
      return this.renderView();
    }
  }

  export default App;