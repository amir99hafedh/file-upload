import React , {useState , useEffect} from "react";
import Button from "../Admin/FormElements/Button";
import JobItems from "./JobItems"
import "./JobList.css"
import axios from "axios";


const JobList = props =>{

    const [data , setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/job/')
        .then(res => {
            console.log(" Postuler job",res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    /*const JobAff1 = data.map((data , index)=>{
        return(
           <tr>
            <td>{data.id}</td>
            <td>{data.titre}</td>
            <td>{data.description}</td>
           </tr>
        )
    })*/
    if(props.items.lenght === 0){
        return(
            <div className="place-list center">
                <h2>Pas de job disponible</h2>
                
            </div>
        );

        
    }
    return <div className="place-list">
        {data.map(data =>
            <JobItems
           // key={place.id}
            id={data._id}
            title={data.titre}
            description={data.description}
            />)}

    </div>
};

export default JobList;