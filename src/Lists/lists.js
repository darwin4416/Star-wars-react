import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Lists extends Component {
    render(){
        return(
            <div>
                <table className ="movieList">
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Release year</th>
                        </tr>
                    </thead>
                    <tbody>
                      {/*map through the movielist props passed from parent state App.js*/}
                       {this.props.movieList.map((movie,index) => {
                            return (
                                <tr key ={'key'+index}>
                                    <td> <Link to={`/movie/${movie.title}`}>{movie.title}</Link></td>
                                    <td>{movie.release_date.slice(0,4)}</td>
                                </tr>
                            )}
                        )}    
                    </tbody>
                </table>
            </div>          
        )
    }
}
export default Lists