import React ,{Component} from 'react'
import './Auth.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie'
class Auth extends Component{
	state={loginShow :true}
	cookie=new Cookie();
	loginhandler=()=>{
		this.setState({loginShow:true})
	}
	signuphandler=()=>{
		this.setState({loginShow:false})
	}

	loginsubmitHandler=async(event)=>{
		event.preventDefault();
		const loginData={
			username : event.target[0].value,
			password:event.target[1].value
		}
		try{
		const response=await axios.post('http://localhost:8000/api/v1/users/login/',loginData)
		this.props.authhandler();
		this.cookie.set('token',response.data.token)
		}catch(err){
			return alert(err.response.data.message);
		}
	}
	signusubmitphandler=async(event)=>{
		event.preventDefault();
		const signUpData={
			username : event.target[0].value,
			email:event.target[1].value,
			password:event.target[2].value
		}
		try{
		const response=await axios.post('http://localhost:8000/api/v1/users/signup/'
		,signUpData)
		// console.log(signUpData)
		this.props.authhandler();
		this.cookie.set('token',response.data.token)
	}catch(err){
		return alert(err.response.data.message);
	}
	}
	render(){
		if(this.props.auth){
			return <Redirect to="/todolist"/>
		}
    return(
        <>
		<h2>Login or sign up for free</h2>
		<div className="box">
		<div className="toggle">
		<h1 className={this.state.loginShow ? 'active':''} onClick={this.loginhandler}>login</h1>
		<h1 onClick={this.signuphandler} className={!this.state.loginShow ? 'active':''}>signup</h1>
		</div>
		{
			this.state.loginShow ?(
			<div className="login">
			<form onSubmit={this.loginsubmitHandler}
				className="auth-form" >
				<input type="text" placeholder="username" className="username-input"/>
				<input type="password" placeholder="password"className="password-input"/>
				<button className="btn btn-primary btn-block btn-large">Login</button>
			</form>
			</div>) : (
				<div className="login">
			<form onSubmit={this.signusubmitphandler} 
			className="auth-form">
			<input type="text" placeholder="username" className="username-input"/>
			<input type="email" placeholder="email" className="email-input"/>
			<input type="password" placeholder="password"className="password-input"/>
			<button className="btn btn-primary btn-block btn-large">Registed</button>
			</form>
			</div>
	
			)
		}
		</div>
		</>
    )
}
}
export default Auth;
