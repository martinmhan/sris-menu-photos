
import React from 'react';
import axios from 'axios';
import path from "path"

class View extends React.Component {
  constructor(){
    super();

    this.state = {
        path: "https://s3-us-west-1.amazonaws.com/table-it/images/"
    }
  }

  render() {
    return (
    <div className ="view">
        {console.log(this.props)}
        <div className = "fullscreenimage">
            <img src={path.join(this.state.path, `restID${this.props.restID}_photo${this.props.photoID}.jpg`)} width ="300" height = "300" onClick={e => this.handlePictureClick(e, 0)}></img> 
        </div>
        
        
        
      Hello from View
    </div>

    )
  }
}

export default View;
