import React from 'react';
import path from "path"
import View from "./View.jsx"
import styles from "../../../dist/styles.css"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rest_id: 0,
            currentPhoto: 0,
            path: "https://s3-us-west-1.amazonaws.com/table-it/images/",
            view: "main"
            
            
        }
    }



render() {
    return (
        <div> 
            <div className={styles.sectionHeader}>
                20 Photos
            </div>
             <div id = "restaurantphotos" className = {styles.layout}> 
                <div className = {styles.col1}>
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo0.jpg`)} height="50%" onClick={e => this.props.handlePictureClick(e, 0)}></img> 
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo1.jpg` )} height="50%" onClick={e => this.props.handlePictureClick(e, 1)}></img>
 
                </div>

                <div className = {styles.col2}>
                    <div className = {styles.rowstyling}> <img src={path.join(this.state.path, `restID${this.state.rest_id}_photo2.jpg` )} width = "100%" height = "100%" onClick={e => this.props.handlePictureClick(e, 2)}></img> </div>
                </div> 
                 <div className = {styles.col3}>
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo3.jpg` )} height = "100/3" onClick={e => this.props.handlePictureClick(e, 3)}></img>
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo4.jpg` )} height = "100/3%" onClick={e => this.props.handlePictureClick(e, 4)}></img>
                    <img className = {styles.row}src={path.join(this.state.path, `restID${this.state.rest_id}_photo5.jpg` )} height = "100/3%" onClick={e => this.props.handlePictureClick(e, 5)}></img>
                </div>

                <div className = {styles.col4}>
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo6.jpg` )} height = "100/3%" onClick={e => this.props.handlePictureClick(e, 6)}></img>
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo7.jpg` )} height = "100/3%" onClick={e => this.props.handlePictureClick(e, 7)}></img>
                    <img className = {styles.row} src={path.join(this.state.path, `restID${this.state.rest_id}_photo8.jpg` )} height = "100/3%" onClick={e => this.props.handlePictureClick(e, 8)}></img>
                </div>  

            </div>
            
            
        </div>
    )
}
}

export default App;

