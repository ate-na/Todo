import React,{Component} from 'react';
import './ShowCard.css'
class ShowCard extends Component{
    accepthandler=()=>{

        this.props.settodos(
            this.props.todos.map((item)=>{
                console.log(item.check)
                if(item.id===this.props.todo.id){
                    return {...item,
                        check:!item.check
                    }
                }
                return item;
            })
        )
    }
    //accepthandler=()=>{
    //    this.props.todo.check=true
    //}
    rejecthandler=()=>{
        this.props.settodos(
            this.props.todos.filter((item)=>(
                item.id !==this.props.todo.id
            ))
        )
    }
    render(){    
    return(
        <div>
        <div className="showcard">
        <li className={`todo-li ${this.props.todo.check ? 'complete':''}`}>{this.props.todo.name}</li>
         <div>   
        <button className="accept" onClick={this.accepthandler} ><i className="fas fa-check"></i>    
        </button>
        <button className="reject" onClick={this.rejecthandler}><i className="fas fa-trash-alt"></i>
        </button>
        </div>
        </div>
        </div>
    )
}


}
export default ShowCard;
