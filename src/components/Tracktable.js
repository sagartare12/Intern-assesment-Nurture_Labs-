import React from 'react'
import {useState , useEffect } from 'react'
import {MdDelete } from "react-icons/md";
import {BasicTable} from './Table'
import Loader from './Loader'
const Tracktable = () => {
        const [isLoading , setIsLoading ] = useState(true);
    const [ datas , setDatas] = useState([]);
    const url = "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";


    // const res =  fetch(url).then(res => res.json());
            
    //         setDat(res);
useEffect(async ()=>{
    try {
        const res = await fetch(url).then(res => res.json());
           
            setDatas(res.data);
            setIsLoading(false);
    } catch (error) {
        console.log(error.message);
    }
},[setDatas]);


    
    return (
        <div className="table">
            
        <span>The terms you are tracking</span>
        <span className="table_heading">The data will be refresh in 5 min.</span>

        
            {!isLoading ? <div className="main_table"><BasicTable  data= {datas} /></div>
                
      

 
                
             : <div className="loader">
                 <Loader />
                 </div>
      
    
             }
  
           
        </div> 




  



    )
}

export default Tracktable
