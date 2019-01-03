import React from 'react';
import path from "path"
import View from "./View.jsx"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rest_id: 50,
            currentPhoto: 0,
            path: "https://s3-us-west-1.amazonaws.com/table-it/images/",
            view: "main"
            
            
        }
    this.changeView = this.changeView.bind(this)    
    }

componentDidMount() {
}

handlePictureClick(e,image_num) {
    console.log("hello World")
    e.preventDefault()
    this.changeView(image_num)
    this.renderView()
}

changeView(option) {
    this.setState({
      view: option
    });
}

renderView() {
    if (this.state.view !== 'main') {
      return <View  photoID = {this.state.view} restID = {this.state.rest_id}/>
  }
}
// https://s3-us-west-1.amazonaws.com/table-it/images/restID50_photo1.jpg
render() {
    return (
        <div> 
            {this.renderView()}                 
             <div className = "layout"> 
                <div className = "img img-1 col1">
                    <img className = "row1" src={path.join(this.state.path, `restID${this.state.rest_id}_photo0.jpg`)} width ="60" height = "60" onClick={e => this.handlePictureClick(e, 0)}></img>
                    <img className = "row2" src={path.join(this.state.path, `restID${this.state.rest_id}_photo1.jpg` )} width ="60" height = "60" onClick={e => this.handlePictureClick(e, 1)}></img>
 
                </div>
                {/* <div className = "img img-2 col1">
                    <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo1.jpg` )}width ="60" height = "60" onClick={e => this.handlePictureClick(e, 1)}></img>
                </div> */}
                <div className = "img img-3 col2">
                    <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo2.jpg` )}width ="120" height = "120" onClick={e => this.handlePictureClick(e, 2)}></img>
                </div> 
                 <div className = "img img-4 col3">
                    <img className = "row1" src={path.join(this.state.path, `restID${this.state.rest_id}_photo3.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 3)}></img>
                    <img className = "row1" src={path.join(this.state.path, `restID${this.state.rest_id}_photo4.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 4)}></img>
                    <img className = "row1"src={path.join(this.state.path, `restID${this.state.rest_id}_photo5.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 5)}></img>
                </div>
                {/* <div className = "img img-5">
                    <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo4.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 4)}></img>
                </div>
                <div className = "img img-6">
                    <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo5.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 5)}></img>
                </div>   */}
                <div className = "img img-7 col4">
                    <img className = "row1" src={path.join(this.state.path, `restID${this.state.rest_id}_photo6.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 6)}></img>
                    <img className = "row1" src={path.join(this.state.path, `restID${this.state.rest_id}_photo7.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 7)}></img>
                    <img className = "row1" src={path.join(this.state.path, `restID${this.state.rest_id}_photo8.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 8)}></img>
                </div>  
                {/* <div className = "img img-8">
                    <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo7.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 7)}></img>
                </div>  
                <div className = "img img-9">
                    <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo8.jpg` )}width ="40" height = "40" onClick={e => this.handlePictureClick(e, 8)}></img>
                </div>                                    */}
            </div>
            
            {/* <img width="300" height="500" src={path.join(this.state.path, `restID${this.state.rest_id}_photo2.jpg` )}></img>
            <img width="42" height="42" src={path.join(this.state.path, `restID${this.state.rest_id}_photo3.jpg` )}></img> */}
        </div>
    )
}
}

export default App;

