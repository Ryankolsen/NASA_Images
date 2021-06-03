import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ImageDisplay extends Component {
    constructor(props) {
        super(props);
    }

render() {
    let rover = this.props.rover;
    let pictures = this.props.images.map((url, index) => {
  
    return(
        <li key={index} className="imageList">        
            <img src={url.img_src}></img>

        </li>
    );
});
    return(
    <div>
        <h4
        style={{
            backgroundColor: "#E0E0E0",
            fontSize: "25px",
            borderRadius: "5px",
            textAlign: "center",
            marginRight: "450px",
            marginLeft: "450px",
            marginBottom: "50px",            
             
          }}>Pictures will display below</h4>
          <h3
            style={{
                textAlign: "center",
                color: "#E0E0E0",                 
              }}  
          >Rover Selected: {rover}</h3> 
        <ul
            style={{
                marginBottom: "50px",
                marginTop: "10px"                 
              }}        
        >{pictures}</ul>
    </div>
    );
}
}
