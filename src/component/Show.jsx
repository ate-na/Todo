import React,{Component} from 'react';
import './Show.css'
class Show extends Component{

render(){
    return(
    <div className="show">
      
        <button className="accept"><i class="fas fa-check"></i>    
        </button>
        <button className="reject"><i class="fas fa-trash-alt"></i>
        </button>
        <div>{this.props.search}</div>
    </div>
    )
}
}
export default Show;
