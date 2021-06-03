import React, { Component } from 'react';

// Import component statements:
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY="0I4CmBIdPkQzB4ingreZhQLShdLDtrHAzJfv15vB";

export default class GetImageForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        rover: "Curiosity",
        camera: "FHAZ",
        images: [],
        sol: "1000",
      };

      //bind methods 
      this.handleSubmit = this.handleSubmit.bind(this);   
      this.fetchRoverImage = this.fetchRoverImage.bind(this);
      this.handleRover = this.handleRover.bind(this);
      this.handleCamera = this.handleCamera.bind(this);
      this.handleSol = this.handleSol.bind(this);
    }
    
    //methods
    handleRover(e) {
        this.setState({rover: e.target.value})
    }

    handleCamera(e) {
        this.setState({camera: e.target.value})
    }

    handleSol(e) {
        this.setState({sol: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.fetchRoverImage();
    }
    
    fetchRoverImage(){
        this.setState({
            camera: this.state.camera,
            rover: this.state.rover,
            sol: this.state.sol,
          });
          let cam = this.state.camera;
          let rove = this.state.rover;
          let num = this.state.sol;
          
          let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
          console.log(imageUrl);

          fetch(imageUrl)
            .then ((photos) => photos.json())
            .then((json) => {
                this.setState({ images: json.photos })
            })
        }

    
      render() {
          return(
            <div>
                <form
                style={{
                    color:"white",
                    margin: "5px",
                    textAlign: "center",
                  }}
                >
                <label htmlFor="rover"
                        style={{
                            marginLeft: "20px",
                            marginRight: "10px"
                        }}
                >Rover</label>
                    <select onChange={this.handleRover} id="rover" value={this.state.value}>
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirt</option>
                    </select>
                <label htmlFor="camera"
                        style={{
                            marginLeft: "20px",
                            marginRight: "10px"
                        }}>Camera Type</label>
                    <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                    <option value="fhaz">FHAZ (Front Hazard)</option>
                    <option value="rhaz">RHAZ (Rear Hazard)</option>
                    <option value="navcam">NAVCAM (Navigation Cam)</option>
                    </select>
                    <label htmlFor="sol"
                        style={{
                            marginLeft: "20px",
                            marginRight: "10px"
                        }}
                    >Martian Sol: 1000-2000</label>
                    <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
                </form>
                <div>
                </div>
                <GetImageButton onClick={this.handleSubmit}/>
                <ImageDisplay rover={this.state.rover} images={this.state.images}  />          
            </div>
          );
      }
}
