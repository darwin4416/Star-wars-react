import React, { Component } from 'react';

import Crawl from '../CrawlAnime/crawl';
import Preloader from '../Preloader/preloader'

var btnStyle ={
    background:'black',
    fontSize:'30px',
    color:'gray',
    textAlign:'right',
    padding:'20px', 
}
var hide ={
    display:'none'
}
class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            showCrawl: true,    //state to toggle or control crawl animation frame
            loader:false,       //state for preloader
            details:[],         // state to store movie details
            characters:[]       //state to store characters fetched from detail store urls
        }
     this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        //get movie data which matches search string
        fetch(`https://swapi.co/api/films/?search=${this.props.match.params.title}`)
            .then((resp) => resp.json())
            .then((results) => {
                this.setState({ details: results.results, loader: true }, () => {
                    results.results.map(movie => {
                        let characterArray = [];
                        // loop through the character urls 
                        for (let i = 0; i < movie.characters.length; i++) {
                            fetch(movie.characters[i]).then((result) =>
                                result.json()
                            ).then(data => {
                                characterArray.push(data);
                                this.setState({ characters: characterArray }) //assign the array to state
                            });
                        }
                        return false;
                    });
                });
            });  
    }
  
   handleClick(){
      this.setState({showCrawl:false}); //on click of cross hide the crawl animation
   }

    render(){
        if(this.state.loader){
            setTimeout(() => {this.setState({showCrawl: false})},30000) //hide the animation after 8 sec
        }
      
        if(!this.state.loader){
            return <Preloader/>
        }
        return(
            <div> 
               {
                this.state.details.map((list,index) =>{
                    return(
                        <div key={'mykey'+index}>
                            <div style ={this.state.showCrawl ? btnStyle : hide}>
                                <span onClick ={this.handleClick} style={{cursor:'pointer'}}>X</span>
                            </div>
                            {   //ternary operator to show respective 
                             this.state.showCrawl ?
                                <Crawl
                                  title= {list.title}
                                  text= {list.opening_crawl}
                                />:
                              <div className ="movieDetailTable">
                               <h2>Movie Detail</h2>
                               <table>
                                <tbody>
                                  <tr>
                                      <th>Title</th>
                                      <td>{list.title}</td>
                                  </tr>
                                  <tr>
                                      <th>Director</th>
                                      <td>{list.director}</td>
                                  </tr>
                                  <tr>
                                      <th>Producer</th>
                                      <td>{list.producer}</td>
                                  </tr>
                                  <tr>
                                      <th>Release Date</th>
                                      <td>{list.release_date}</td>
                                  </tr>
                                  <tr>
                                      <th>Characters</th>
                                      <td className ="charList">
                                       { 
                                         this.state.characters.map((character,index) =>{
                                            return (
                                             <span key={character.name}> {index+1}.{ character.name}</span>
                                           )
                                         })
                                       }
                                     </td>
                                  </tr>
                                 </tbody>
                               </table>
                             </div>
                            }    
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}

export default MovieDetail