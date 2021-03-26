import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css'
const Nav=()=>{
    return(
    <nav className="nav">
        <ul>
            <li>
                <Link className="Link" to="/">Home</Link>
            </li>
            <li>
            <Link className="Link" to="/auth">login</Link>
            </li>
            <li>
            <Link className="Link" to="/Todolist">Todolist</Link>
            </li>
        </ul>
    </nav>)
} 
export default Nav;