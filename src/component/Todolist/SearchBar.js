import React, { useState } from 'react';
import './SearchBar.css'
import  '../Auth/Auth.css'
import axios from 'axios'
const SearchBar=({token,todos,searchHandler,signhandler,sign})=>{
    const [searchterm,setsearchterm]=useState('');
    const onchangeHandler=(event)=>{
                setsearchterm(event.target.value)
            }
            const onchangeselect=(e)=>{
                signhandler(e.target.value);
            }
             const onSubmitHandler=async(even)=>{
                even.preventDefault()
                try{
                const posttodos=await axios.post('http://localhost:8000/api/v1/todos/',{
                
                    name:'todo',
                    description:searchterm,
                    isChecked:false
             },{    
                headers:{
                        Authorization :`Bearer ${token}`
                    }}
                )
                // console.log(posttodos.data.data._id)
                searchHandler([...todos,{description:searchterm,isChecked:false,_id: posttodos.data.data._id
                }])
                setsearchterm('');
            }catch(err){
                console.log(err)
                // return alert(err.response.data.message);
            }
        }
    return(
            <div className="Searchterm">
                <form onSubmit={onSubmitHandler}>
                <div className="formn">
                <label htmlFor='inpt'></label>
                <input type="text"
                placeholder="Search"
                name="inpt"
                onChange={onchangeHandler}
                value={searchterm}
                />
                <button ><i className="fas fa-plus-square"></i></button>
                </div>
                <select 
                name="sort" 
                id="sort"
                onChange={onchangeselect}
                value={sign}
                className="select"
                >
                <option >ALL</option>
                <option > finished</option>
                <option >unfinished</option>
                </select>
            </form>    
        </div>
        )
    }
export default SearchBar;
// class SearchBar extends Component{
//     state={searchterm:''}
//     onchangeHandler=(event)=>{
//         this.setState({searchterm:event.target.value})
//     }
//     onchangeselect=(e)=>{
//         this.props.signhandler(e.target.value);
//     }
//      onSubmitHandler=async(even)=>{
//         even.preventDefault()
//         try{
//         const posttodos=await axios.post('http://localhost:8000/api/v1/todos/',{
        
//             name:'todo',
//             description:this.state.searchterm,
//             isChecked:false
//      },{    
//         headers:{
//                 Authorization :`Bearer ${this.props.token}`
//             }}
//         )
//         // console.log(posttodos.data.data._id)
//         this.props.searchHandler([...this.props.todos,{description:this.state.searchterm,isChecked:false,_id: posttodos.data.data._id
//         }])
//         this.setState({searchterm:''})
//     }catch(err){
//         return alert(err.response.data.message);
//     }
// }

//     render(){
//         return(
//         <div className="Searchterm">
//             <form onSubmit={this.onSubmitHandler}>
//                <div className="formn">
//                 <label htmlFor='inpt'></label>
//                 <input type="text"
//                 placeholder="Search"
//                 name="inpt"
//                 onChange={this.onchangeHandler}
//                 value={this.state.searchterm}
//                 />
//                 <button ><i className="fas fa-plus-square"></i></button>
//                 </div>
//                 <select 
//                 name="sort" 
//                 id="sort"
//                 onChange={this.onchangeselect}
//                 value={this.props.sign}
//                 className="select"
//                 >
//                 <option >ALL</option>
//                 <option > finished</option>
//                 <option >unfinished</option>
//             </select>
//                 </form>
             
//             </div>)
//     }
// }
