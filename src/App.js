import React, { Component } from 'react';
import logo from './images/star-war.jpg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Search from './Search/search';
import Lists from './Lists/lists';
import MovieDetail from './MovieDetail/movieDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchStr:'',
      movieListUrls:[],
      toggleTable: false
    }
    this.getInputData = this.getInputData.bind(this);
  }
  
  getInputData(serachStr){
     fetch(`https://swapi.co/api/films/?search=${serachStr}`).then((resp) => resp.json())
     .then((results) => 
          {
            this.setState({movieListUrls:results.results,toggleTable:true})
          }
     )
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict render={
            () => {
              return (
                <div className="App">
                  <img src={logo} className="logo" alt="logo" />
                  <Search inputHandler={this.getInputData} />
                  {
                    this.state.toggleTable ?
                      <Lists movieList={this.state.movieListUrls} />
                      : null
                  }
                </div>
              )
            }
          } />
          
          <Route path="/movie/:title" exact strict component={MovieDetail} />
        </div>
      </Router>
 );
  }
}

export default App;
