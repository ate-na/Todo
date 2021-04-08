import React from 'react';
import Todolist from '../component/Todolist/Todolist'
const Todolistpage=({setusername,username})=>{
    return(<div><Todolist setusername={setusername} username={username}/></div>)
}
export default Todolistpage;