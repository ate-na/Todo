import React from 'react';
import Auth from '../component/Auth/Auth'
const Authpage=({authhandler,auth})=>{
    return(<div>
       <Auth auth={auth}
       authhandler={authhandler}/>
    </div>)  
} 
export default Authpage;