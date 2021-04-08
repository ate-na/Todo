import React ,{useState} from 'react'
import './Auth.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Cookie from 'universal-cookie'
const Auth=({auth,authhandler})=>{
const [loginShow,setloginShow]=useState(true);
	const cookie=new Cookie();
	const loginhandler=()=>{
		setloginShow(true);
		console.log(loginShow)
	}
	const signuphandler=()=>{
		setloginShow(false)
	}
	const loginsubmitHandler=async(event)=>{
		event.preventDefault();
		const loginData={
			username : event.target[0].value,
			password:event.target[1].value
		}
		try{
		const response=await axios.post('http://localhost:8000/api/v1/users/login/',loginData)
		cookie.set('token',response.data.token)
		authhandler();
		}catch(err){
			// return alert(err.response.data.message);
			console.log(err)
		}
	}
	const signusubmitphandler=async(event)=>{
		event.preventDefault();
		const signUpData={
			username : event.target[0].value,
			email:event.target[1].value,
			password:event.target[2].value
		}
		try{
		const response=await axios.post('http://localhost:8000/api/v1/users/signup/'
		,signUpData)
		cookie.set('token',response.data.token)
		authhandler();
		console.log(loginShow);
	}catch(err){
		return alert(err.response.data.message);
	}
	}
	if(auth){
		return <Redirect to="/todolist"/>
	}
	else{
	return(
        <>
		<h2>Login or sign up for free</h2>
		<div className="box">
		<div className="toggle">
		<h1 onclick={loginhandler} className={loginShow ? 'active':''} >login</h1>
		<h1 onClick={signuphandler} className={!loginShow ? 'active':''}>signup</h1>
		</div>
		{
			loginShow ?(
			<div className="login">
			<form onSubmit={loginsubmitHandler}
				className="auth-form" >
				<input type="text" placeholder="username" className="username-input"/>
				<input type="password" placeholder="password"className="password-input"/>
				<button className="btn btn-primary btn-block btn-large">Login</button>
			</form>
			</div>) : (
				<div className="login">
			<form onSubmit={signusubmitphandler} 
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
    )}}
export default Auth;
// class Auth extends Component{
// 	state={loginShow :true}
// 	cookie=new Cookie();
// 	loginhandler=()=>{
// 		this.setState({loginShow:true})
// 	}
// 	signuphandler=()=>{
// 		this.setState({loginShow:false})
// 	}

// 	loginsubmitHandler=async(event)=>{
// 		event.preventDefault();
// 		const loginData={
// 			username : event.target[0].value,
// 			password:event.target[1].value
// 		}
// 		try{
// 		const response=await axios.post('http://localhost:8000/api/v1/users/login/',loginData)
// 		this.props.authhandler();
// 		this.cookie.set('token',response.data.token)
// 		}catch(err){
// 			console.log(err)
// 			// return alert(err.response.data.message);
// 		}
// 	}
// 	signusubmitphandler=async(event)=>{
// 		event.preventDefault();
// 		const signUpData={
// 			username : event.target[0].value,
// 			email:event.target[1].value,
// 			password:event.target[2].value
// 		}
// 		try{
// 		const response=await axios.post('http://localhost:8000/api/v1/users/signup/'
// 		,signUpData)
// 		// console.log(signUpData)
// 		this.props.authhandler();
// 		this.cookie.set('token',response.data.token)
// 	}catch(err){
// 		return alert(err.response.data.message);
// 	}
// 	}
// 	render(){
// 		if(this.props.auth){
// 			return <Redirect to="/todolist"/>
// 		}
//     return(
//         <>
// 		<h2>Login or sign up for free</h2>
// 		<div className="box">
// 		<div className="toggle">
// 		<h1 onClick={this.loginhandler} className={this.state.loginShow ? 'active':''} >login</h1>
// 		<h1 onClick={this.signuphandler} className={!this.state.loginShow ? 'active':''}>signup</h1>
// 		</div>
// 		{
// 			this.state.loginShow ?(
// 			<div className="login">
// 			<form onSubmit={this.loginsubmitHandler}
// 				className="auth-form" >
// 				<input type="text" placeholder="username" className="username-input"/>
// 				<input type="password" placeholder="password"className="password-input"/>
// 				<button className="btn btn-primary btn-block btn-large">Login</button>
// 			</form>
// 			</div>) : (
// 				<div className="login">
// 			<form onSubmit={this.signusubmitphandler} 
// 			className="auth-form">
// 			<input type="text" placeholder="username" className="username-input"/>
// 			<input type="email" placeholder="email" className="email-input"/>
// 			<input type="password" placeholder="password"className="password-input"/>
// 			<button className="btn btn-primary btn-block btn-large">Registed</button>
// 			</form>
// 			</div>
	
// 			)
// 		}
// 		</div>
// 		</>
//     )
// }
// }
// export default Auth;

