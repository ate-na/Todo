import React, { Component } from 'react';
import './SearchBar.css'
class SearchBar extends Component{
    state={searchterm:''}
    onchangeHandler=(event)=>{
        this.setState({searchterm:event.target.value})
    }
     onSubmitHandler=(even)=>{
        even.preventDefault()
        this.props.searchHandler(this.state.searchterm)
        this.setState({searchterm:''})
    }
    render(){
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
               <div className="formn">
                <label htmlFor='inpt'></label>
                <input type="text"
                placeholder="Search"
                name="inpt"
                onChange={this.onchangeHandler}
                value={this.state.searchterm}
                />
                <button ><i class="fas fa-plus-square"></i></button>
                </div>
                <select name="sort" id="sort">
                <option >ALL</option>
                <option > signed</option>
                <option >unsigned</option>
            </select>
                </form>
             
            </div>)
    }
}
export default SearchBar;