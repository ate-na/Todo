import React, { Component } from 'react';
import './SearchBar.css'
class SearchBar extends Component{
    state={searchterm:''}
    onchangeHandler=(event)=>{
        this.setState({searchterm:event.target.value})
    }
    onchangeselect=(e)=>{
        this.props.signhandler(e.target.value);
    }
     onSubmitHandler=(even)=>{
        even.preventDefault()
        this.props.searchHandler([...this.props.todos,{name:this.state.searchterm,check:false,id: Math.random()*100}])
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
                <button ><i className="fas fa-plus-square"></i></button>
                </div>
                <select 
                name="sort" 
                id="sort"
                onChange={this.onchangeselect}
                value={this.props.sign}
                >
                <option >ALL</option>
                <option > finished</option>
                <option >unfinished</option>
            </select>
                </form>
             
            </div>)
    }
}
export default SearchBar;