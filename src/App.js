import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Todolistpage from  './pages/Todolistpage';
import Home from './pages/Home';
import Nav from './component/Nav/Nav';
import Authpage from './pages/Authpage';
import Producted from './component/Producted'
import Cookie from 'universal-cookie'
class App extends Component{
    state={auth :false,username:''}
    cookie=new Cookie();
    
    authhandler=()=>{
        this.setState({auth:true})
    }
    authfalsehandler=()=>{
        this.setState({auth:false})
        this.cookie.remove('token')
    }
    componentDidMount=()=>{
        const authcookie=this.cookie.get('token')
        authcookie? this.authhandler():this.authfalsehandler()
    }
    setusername=(username)=>{ 
        this.setState({username:username})
    }
    render(){
        return (

            <>
            <Nav auth={this.state.auth} authfalsehandler={this.authfalsehandler} username={this.state.username}/>
            <Switch>
            <Route path="/" exact ><Home/></Route>
            <Route path="/auth" ><Authpage authhandler={this.authhandler} auth={this.state.auth}/></Route>
                <Producted auth={this.state.auth}
                path="/todolist">
                <Todolistpage
                setusername={this.setusername}/>
                </Producted>
            </Switch>
          
            </>
        )
    }
}
export default App;