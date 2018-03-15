import React, { Component } from 'react';
import axios from "axios";
import TopSpot from "./topspot";
import "./css/style.css"


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
    
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)      
      .then(topspots => this.setState({topspots}));
      
  }
  
  locationSplit(location) {
    location.splice()
  }

  render() {
    return (
      <div className = "reactContainer">
        <header>
          <h1 id="header">San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </header>
        <div className='App container'>
        
          <div className="row">
            <div className="col-md-12 list">
              {this.state.topspots.map(topspot => (
              <TopSpot
                key = {topspot.id}
                name = {topspot.name}
                description = {topspot.description}
                location = {topspot.location} />
              ))}
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
