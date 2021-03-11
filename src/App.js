import React,{Component} from 'react';
import SearchBar from './component/SearchBar';
import Show from './component/Show'
import './app.css';
class App extends Component{
    state={search:[]}
    searchHandler=(evnt)=>{
        console.log(evnt);
        this.setState({search:evnt})
    }
    componentDidMount(){

    }
render(){
    return(<div className="App">
        <h1>Your Todo List</h1>
        <SearchBar searchHandler={this.searchHandler}/>
        <Show search={this.state.search}/>
        
        </div>)
}
}
export default App;