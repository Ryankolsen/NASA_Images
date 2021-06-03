import React, { Component } from 'react';
import '../styles/App.css';

//Component Imports:
import GetImageForm from './GetImageForm';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <div className="header" style={{marginBottom:"30px"}}>
          <h1
          style={{
            // backgroundColor: "purple",
            fontSize: "35px",
            textAlign: "center",
            color: "#E0E0E0",
            fontFamily: "Lucida Handwriting, Cursive",
            textShadow: "-1px, -1px, 0, #000",
            wordSpacing: "2px",
             
          }}
          > Images from NASA Rovers on Mars </h1>
        </div>
        < GetImageForm  />

      </div>
    );
  }
}

export default App;
