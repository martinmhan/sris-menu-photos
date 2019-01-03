
import React from 'react';
import axios from 'axios';
import path from "path"
import App from "../App.jsx"

class View extends React.Component {
  constructor(){
    super();

    this.state = {
        path: "https://s3-us-west-1.amazonaws.com/table-it/images/",
        current_photo: this.props ? this.props.photoID:null,
        close: false
  
    }
  }
componentWillMount() {
  this.setState({
    current_photo: this.props.photoID
  });
}

handleLeftClick(e) {
  e.preventDefault()
  if (this.state.current_photo === 0) {
    this.setState({current_photo: 19})
  } else{
    this.setState({current_photo: this.state.current_photo - 1})
  }
}


handleRightClick(e) {
  e.preventDefault()
  if (this.state.current_photo === 19) {
    this.setState({current_photo: 0})
  } else{
    this.setState({current_photo: this.state.current_photo + 1})}
}



renderView() {
  if (this.state.close === true) {
    return <App />
  }
}
  render() {
    return (
      // this.renderView()
      <div> 
        
        <div className ="view">
        <div className = "fullscreenimage">
          <div className  = "photo-gallery">
          <button id="escape" onClick={e => this.props.handleEscape(e)}><img src="https://s3-us-west-1.amazonaws.com/table-it/baseline-clear-24px.svg"></img> </button>
          <button id="chevron_left" onClick={e => this.handleLeftClick(e)}><img src="https://s3-us-west-1.amazonaws.com/table-it/baseline-chevron_left-24px.svg"></img> </button>
            <img src={path.join(this.state.path, `restID${this.props.restID}_photo${this.state.current_photo}.jpg`)} width ="300" height = "300" ></img> 
          <button id="chevron_right" onClick={e => this.handleRightClick(e)}><img src="https://s3-us-west-1.amazonaws.com/table-it/baseline-chevron_right-24px.svg"></img> </button>
          </div>
        </div>
      </div> 
        
        
      Hello from View
    </div>

    )
  }
}

export default View;
