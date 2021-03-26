import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Todolistpage from  './pages/Todolistpage';
import Home from './pages/Home';
import Nav from './component/Nav/Nav';
import Authpage from './pages/Authpage';

class App extends Component{
    render(){
        return (
            <>
            <Nav/>
            <Switch>
            <Route path="/" exact ><Home/></Route>
            <Route path="/auth" ><Authpage/></Route>
            <Route path="/Todolist" ><Todolistpage/></Route>
            </Switch>
            <Todolistpage/>
            </>
        )
    }
}
export default App;