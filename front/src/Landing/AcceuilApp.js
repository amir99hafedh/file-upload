import React from 'react';
import { Link } from 'react-router-dom'
import "./AcceuilApp.css"


const AcceuilApp = () => {
    
    return (
        

        
        <div className="HomePage" >
           <div className='a' >

         
            <div className=" m-auto" style={{display:"flex",width:"100%",height:"500px"}}>
                
                <div  className="card1" style={{marginLeft:"30px"}}>
                <Link to="/connexion">
                   <img src="astute3.png" alt=""  style={{height:"250px",width:"250px"}} />
                   
                   <div className="link_class"  >
                   
                     Se connecter en tant <br/>qu'administrateur</div>
                     </Link>
                   </div>
         
                <div className="card1" style={{marginLeft:"30px"}} >
                    <Link to="/connexion">
               
                   <img src="sa.png"  alt="" style={{height:"250px",width:"250px"}} />
               
                   <div  className="link_class"  > Se connecter en tant que <br/> salarié</div> 
                   </Link>
                </div>
                
                <div className="card1"  >
                    <Link to="/connexion">
               
                   <img src="f.jpg"  alt="" style={{height:"250px",width:"250px"}} />
                  
                    <div className="link_class"   >Se connecter en tant que <br/> freelencer</div>
                    </Link>
                    
                </div>
                
                </div>
               
            </div>
           
            </div>
          
            
            
            
        
    );
};

export default AcceuilApp;
/* 
import React from 'react';
import { Link } from "react-router-dom"
import "./Landing.css"


const Landing = () => {
    const con = () =>{
        window.location.href='connexion'
    }
    return (
        
        <div className="HomePage" >
           <div className='a' >

         
            <div className=" m-auto" style={{display:"flex",width:"100%",height:"500px"}}>
                
                <div  className="card" style={{marginLeft:"30px"}}>
                   <img src="astute1.png" alt="StudentIMage" onClick={con} style={{height:"250px",width:"250px"}} />
                   
                   <div className="link_class" to="/adminlogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> Se connecter en tant <br/>qu'administrateur</div>
                </div>
         
                <div className="card" style={{marginLeft:"30px"}} >
                   <img src="sa.png" alt="StudentIMage" style={{height:"250px",width:"250px"}} />
               
                   <div  className="link_class" to="/stulogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> Se connecter en tant que <br/> salarié</div>  
                </div>
                
                <div className="card" style={{marginLeft:"30px"}} >
                   <img src="f.jpg" alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                  
                    <div className="link_class" to="/teclogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}} >Se connecter en tant que <br/> freelencer</div>
                </div>
                </div>
            </div>
            </div>
            
            
        
    );
};

export default Landing; */