import React, { useEffect, useState } from "react";
import JobList from "./JobList"
import axios from "axios";




const ConsulteJob =()=>{

    const JobAff1 = []
   /* const [data , setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/job/')
        .then(res => {
            console.log("Postuler job",res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    const JobAff1 = data.map((data )=>{
        return(
           <tr>
            <td>{data._id}</td>
            <td>{data.titre}</td>
            <td>{data.description}</td>
           </tr>
        )
    })*/
    
   
    return (
       
        <JobList  items={ JobAff1}/>
       
    )
};

export default ConsulteJob;