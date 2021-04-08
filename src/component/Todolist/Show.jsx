import React from 'react';
import './Show.css'
import ShowCared from './ShowCard';
const Show=({todos,filtertodos,settodos,token})=>{  
   return(
            <div className="Show">
               {filtertodos.map((todo)=>{
               return(
                   <ShowCared
                    todos={todos}
                    token={token}
                    todo={todo}
                    settodos={settodos}
                    key={todo._id}/>
                  );
               })}
            </div>
           )

}
// class Show extends Component{
//     render(){
//        const{todos,filtertodos,settodos,token}=this.props;
//        return(
//            <div className="Show">
//                {filtertodos.map((todo)=>{
//                    return(
//                        <ShowCared
//                        todos={todos}
//                        token={token}
//                        todo={todo}
//                        settodos={settodos}
//                        key={todo._id}/>
//                    );
//                    })}
//            </div>
//        )}}
export default Show;
