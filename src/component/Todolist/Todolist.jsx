import React,{Component,useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import Show from './Show'
import './Todolist.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
const Todolist=({setusername,username})=>{
    const [todos,settodos]=useState([]);
    const [filtertodos,setfiltertodos]=useState([]);
    const [sign,setsign]=useState('all');
    const cookies=new Cookies();
    const token=cookies.get('token')
    const signhandler=(option)=>{
        setsign(option);
        }
    const filteroption=()=>{
        switch(sign){
            case 'finished':
                setfiltertodos(
                    todos.filter(
                        (item)=>!item.isChecked===true));
                        console.log("finished")
                        console.log(filtertodos)
            break;
            case 'unfinished':  
            setfiltertodos(
                    todos.filter(
                        (item)=> !item.isChecked===false));
                        console.log("unfinished")
                        console.log(filtertodos)
            break;
            default:
                setfiltertodos(todos)
            break;            
        }
        // console.log(filtertodos);
    }
    const gettodos=async()=>{
        const userTodo=await axios.get('http://localhost:8000/api/v1/todos/',{
            headers:{
                Authorization :`Bearer ${token}`
            }
        })
        settodos(userTodo.data.todos)
        // console.log(userTodo.data.todos);
    }
        useEffect(async()=>{
            try {
                const userdata=await axios.get('http://localhost:8000/api/v1/users/me/',{
                headers:{
                        Authorization :`Bearer ${token}`
                        }
                },)
                gettodos();
                console.log(filtertodos)
                // console.log(userdata.data.data.doc.username)
                setusername(userdata.data.data.doc.username)
                } catch (err) {
                    console.log(err.response);
                }                   
            },[])
        useEffect(()=>{
        filteroption();   
        },[sign,todos])
       
       return(
        <div className="todo">
        <h1>Your Todo List</h1>
        <SearchBar
        token={token} 
        todos={todos}
        searchHandler={settodos}
        signhandler={signhandler}
        sign={sign}/>
        <Show 
        token={token}
        settodos={settodos}
        todos={todos}
        filtertodos={filtertodos}
        />  
        </div>)}
export default Todolist;
// class Todolist extends Component{
//     state={todos:[],filtertodos :[],sign:'all'}
//     signhandler=(option)=>{
//         this.setState({sign:option})
//         }
//         cookies=new Cookies();
//         token=this.cookies.get('token');

//         componentDidMount=async()=>{
//             try {
//                 const userdata=await axios.get('http://localhost:8000/api/v1/users/me/',{
//                     headers:{
//                         Authorization :`Bearer ${this.token}`
//                     }
//                 })
//                 this.gettodos();
//                 console.log(userdata.data.data.doc.username)
//                 this.props.setusername(userdata.data.data.doc.username)
//             } catch (err) {
//                 console.log(err.response);
//             }
//         }
//         gettodos=async()=>{
//             const userTodo=await axios.get('http://localhost:8000/api/v1/todos/',{
//                 headers:{
//                     Authorization :`Bearer ${this.token}`
//                 }
//             })
//             console.log(userTodo);
//              this.settodos(userTodo.data.todos)
//             console.log(userTodo.data.todos);
//         }
//     componentDidUpdate(prevProps, prevState){
//         if(this.state.todos !==prevState.todos ||
//             this.state.sign !==prevState.sign){
//             this.filteroption();
//         }
          
//     }
//     filteroption=()=>{
//         switch(this.state.sign){
//             case 'finished':
//                 this.setState({
//                     filtertodos:this.state.todos.filter(
//                         (item)=>item.isChecked===true)});
//             break;
//             case 'unfinished':
//                 this.setState({
//                     filtertodos:this.state.todos.filter(
//                         (item)=>item.isChecked===false)});
//             break;
//             default:
//                 this.setState({filtertodos:this.state.todos})
//             break;            
//         }
//     }
//     settodos=(evnt)=>{
//         this.setState({todos:evnt})
//     }
// render(){
//     return(<div className="todo">
//         <h1>Your Todo List</h1>
//         <SearchBar
//         token={this.token} 
//         todos={this.state.todos}
//         searchHandler={this.settodos}
//         signhandler={this.signhandler}
//         sign={this.state.sign}/>
//         <Show 
//         token={this.token}
//         settodos={this.settodos}
//         todos={this.state.todos}
//         filtertodos={this.state.filtertodos}
//         />
//         </div>)
//     }
// }
// export default Todolist;