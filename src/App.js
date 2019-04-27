import React, { Component } from 'react';
import './App.scss';
import Dog from './components/Dog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogsList: [],
      doggy: " "
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breed/hound/images');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogsList: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleChange = event => {
    //console.log(event.target.value);
    this.setState({
      doggy: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Hound Dog Search</h1>
        <input name="dog" type="text"  onChange={this.handleChange}  placeholder="Search Dog Breed" required/>
        
         <Dog dogList={this.state.dogsList} doggy={this.state.doggy} />
         {console.log(this.state.doggy.length)}
      </div>
    );
  }
}

export default App;
