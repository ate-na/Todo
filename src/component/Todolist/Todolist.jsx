import React,{Component} from 'react';
import SearchBar from './SearchBar';
import Show from './Show'
import './Todolist.css'
class Todolist extends Component{
    state={todos:[],filtertodos :[],sign:'all'}
    signhandler=(option)=>{
        this.setState({sign:option})

    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.todos !==prevState.todos ||
            this.state.sign !==prevState.sign){
            this.filteroption();
        }
    }
    filteroption=()=>{
        switch(this.state.sign){
            case 'finished':
                this.setState({
                    filtertodos:this.state.todos.filter(
                        (item)=>item.check===true)});
            break;
            case 'unfinished':
                this.setState({
                    filtertodos:this.state.todos.filter(
                        (item)=>item.check===false)});
            break;
            default:
                this.setState({filtertodos:this.state.todos})
            break;            
        }
    }
    settodos=(evnt)=>{
        this.setState({todos:evnt})
    }
render(){
    return(<div className="todo">
        <h1>Your Todo List</h1>
        <SearchBar 
        todos={this.state.todos}
        searchHandler={this.settodos}
        signhandler={this.signhandler}
        sign={this.state.sign}/>
        <Show 
        settodos={this.settodos}
        todos={this.state.todos}
        filtertodos={this.state.filtertodos}
        
        />
        </div>)
    }
}
export default Todolist;