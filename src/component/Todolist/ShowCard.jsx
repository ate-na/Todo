import React,{Component} from 'react';
import './ShowCard.css'
import axios from 'axios'
const ShowCard =({todo,token,todos,settodos})=>{
    const rejecthandler=async()=>{
    try{        
        const detedata=await axios.delete(`http://localhost:8000/api/v1/todos/${todo._id}`,{
                headers:{
                    Authorization :`Bearer ${token}`
                } 
        })
        // console.log(detedata)
        settodos(
        todos.filter((item)=>(
                item._id !==todo._id
            ))
        )
        }catch(err){
            return alert(err.response)
        }
    }
    const accepthandler=async()=>{
    try {
            const acceptitem=axios.patch(`http://localhost:8000/api/v1/todos/${todo._id}`,{
            isChecked:!todo._id.isChecked
            },{
            headers:{
                    Authorization :`Bearer ${token}`
                    }   
            })
            // console.log(acceptitem)
            } catch (error) {
             console.log(error)   
            }
            settodos(
            todos.map((item)=>{
             if(item._id===todo._id){
                return {...item,
                        isChecked:!item.isChecked
                    }
                }
                return item;
            })
        )              
    }

    return(
            <div>
            <div className="showcard">
            <li className={`todo-li ${todo.isChecked ? 'complete':''}`}>{todo.description}</li>
             <div>   
            <button className="accept" onClick={accepthandler} ><i className="fas fa-check"></i>    
            </button>
            <button className="reject" onClick={rejecthandler}><i className="fas fa-trash-alt"></i>
            </button>
            </div>
            </div>
            </div>
        )    
}
export default ShowCard;
// class ShowCard extends Component{
    // todos={todos}
    // token={token}
    // todo={todo}
    // settodos={settodos}
   
//     rejecthandler=async()=>{
//     try{        
//         const detedata=await axios.delete(`http://localhost:8000/api/v1/todos/${this.props.todo._id}`,{
//                 headers:{
//                     Authorization :`Bearer ${this.props.token}`
//                 } 
//         })
//         // console.log(detedata)
//         this.props.settodos(
//             this.props.todos.filter((item)=>(
//                 item._id !==this.props.todo._id
//             ))
//         )
//         }catch(err){
//             return alert(err.response)
//         }
//     }
//     accepthandler=async()=>{
//             try {
//                 const acceptitem=axios.patch(`http://localhost:8000/api/v1/todos/${this.props.todo._id}`,{
//                     isChecked:!this.props.todo._id.isChecked
//                 },{
//                     headers:{
//                         Authorization :`Bearer ${this.props.token}`
//                     }   
//                 })
//                 // console.log(acceptitem)
//             } catch (error) {
//              console.log(error)   
//             }
//         this.props.settodos(
//         this.props.todos.map((item)=>{
//             if(item._id===this.props.todo._id){
//                 return {...item,
//                     isChecked:!item.isChecked
//                 }
//             }
//             return item;
//         })
//     )
      
//     }
//     render(){    
//     return(
//         <div>
//         <div className="showcard">
//         <li className={`todo-li ${this.props.todo.isChecked ? 'complete':''}`}>{this.props.todo.description}</li>
//          <div>   
//         <button className="accept" onClick={this.accepthandler} ><i className="fas fa-check"></i>    
//         </button>
//         <button className="reject" onClick={this.rejecthandler}><i className="fas fa-trash-alt"></i>
//         </button>
//         </div>
//         </div>
//         </div>
//     )
// }


// }
//export default ShowCard;
