import React,{Component} from 'react';
import './Show.css'
import ShowCared from './ShowCard';
class Show extends Component{
    render(){
       const{todos,filtertodos,settodos}=this.props;
       return(
           <div className="Show">
               {filtertodos.map((todo)=>{
                   return(
                       <ShowCared
                       todos={todos}
                       todo={todo}
                       settodos={settodos}
                       key={todo.id}/>
                   );
                   })}
           </div>
       )}}
export default Show;
