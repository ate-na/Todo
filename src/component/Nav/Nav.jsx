import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css'

const Nav=({auth,authfalsehandler,username})=>{
    return(
    <nav className="nav">
        <ul>
            <li>
                <Link className="Link" to="/">Home</Link>
            </li>
           { auth ?(
           <>
           <li>
            <Link className="Link" to="/auth" onClick={authfalsehandler}>logout</Link>
            </li>
            <li>
            <Link className="Link" to="/Todolist">Todolist</Link>
            </li>
            </>
            ):(
            <li>
            <Link className="Link" to="/auth">login/signUp</Link>
            </li>)}
            <li className="end">
            {auth? <p><i className="fas fa-user"></i>Hello <span className="username">{username}</span></p>:null}
            </li>
        </ul>
       
    </nav>)
} 
export default Nav;