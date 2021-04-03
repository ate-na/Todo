import React from 'react';
import Todolist from '../component/Todolist/Todolist'
const Todolistpage=({setusername})=>{
    return(<div><Todolist setusername={setusername}/></div>)
}
export default Todolistpage;