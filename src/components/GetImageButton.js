import React, { Component } from 'react';

export default class GetImageButton extends Component {
    render() {
        return(
          <div>
            <div className="button"
                style={{
                    // backgroundColor: "purple",
                    fontSize: "20px",
                    textAlign: "center",
                    marginBottom: "25px"
                     
                  }}
            >
                <button type="submit" onClick={this.props.onClick}
                style={{
                    // color: "white",
                    textAlign: "center",   
                    borderRadius: "5px",  
                    padding: "5px 15px 5px 15px",            
                  }}>
                    Submit
                </button>
            </div>
              
          </div>
    
        );
    }
    
}