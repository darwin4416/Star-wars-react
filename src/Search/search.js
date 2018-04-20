import React, { Component } from 'react';


class Search extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputField: ''
          };
    }
    handleChange(e){
        e.preventDefault()
        this.setState({
            inputField:e.target.value
        },() =>
            this.props.inputHandler(this.state.inputField)
        )
    }
    render(){
        return(
            <div className ="searchBar">
                <label>Search By</label>
                <span>Movie Title</span>
                <input type="search" onChange = {this.handleChange}/>
            </div>
        )
    }
}
export default Search