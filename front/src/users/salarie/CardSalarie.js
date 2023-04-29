import React from "react";
import './CardSalarie.css'


const CardSalarie = props =>{

    return (
      
             <div className='card-salarie'>
                 {props.children}
             </div>
    
    )
   


};

export default CardSalarie;