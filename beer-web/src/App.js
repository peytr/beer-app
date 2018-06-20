import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// feed the state to the render (null)

// fetch all the beers from the api

// want the fetched data in the same state

// feed the updated state to the render

// 1. state - DONE
// 2. componentDidMount (fetch data when ready) - DONE
// 3. fetch data (for now using js fetch) - DONE
// 4. 

function parseBeer(beer) {
  const {id, name, description, image_url} = beer
  return {
    id,
    name,
    description,
    image_url
  }
}

class App extends Component {

  state = {
    beers: null
  }

  componentDidMount() {
    const beerURL = 'http://localhost:3000/beers'
    fetch(beerURL)
      .then(response => response.json())
      .then(beersData => {

        const beers = beersData.map(parseBeer)
        this.setState({
          beers
        })
    })
    .catch(err => console.error(err))
  }

  render() {

    if(!this.state.beers) {
      return <div>Loading Beers...</div>
    }

    const beers = this.state.beers.map(beer => {
      return (
      <div key={beer.id} className="card">
        <div className="card">
          <div className="card-title">
            <h2>{beer.name}</h2>
          </div>
          <div className="card-body">
            <img src={beer.image_url} alt={beer.name}/>
            <p>{beer.description}</p>
          </div>
        </div>
      </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beer</h1>
        </header>
        <div className="card-row">
        {beers}
        </div>
      </div>
    );
  }
}

export default App;
