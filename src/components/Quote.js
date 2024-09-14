import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRandom } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Card from './Card';


function Quote({setSavedTaskData}) {

  
    
  const api_URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  const [quoteData,setQuoteData] = useState("");
  
  const [loading,setLoading] = useState(false);
  

  const addToList = (newItem)=>{
    console.log("saving")
    setSavedTaskData((prevItem)=>[...prevItem , newItem]);
    console.log("saved")
  }

  

  const fetchQuoteData = async ()=>{
  
    try {
      setLoading(true);
      const response = axios.get(api_URL)
                          .then((res)=>{
                            setQuoteData(res.data);
                          })
                          .catch((error)=>{
                            console.log(error);
                          })

      // console.log(response);

      

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  

  useEffect(()=>{
    
    fetchQuoteData()
    
  },[]);




  return (
    <div className=' bg-white  p-3 rounded-2xl border-2 shadow-inner shadow-slate-600 h-[100%] w-[100%]   ' >
       
      <div className=' flex  flex-col p-6 flex-wrap  items-center justify-center h-[80%] w-[100%] '>     
              <Card quoteData={quoteData} loading={loading} />
     </div>

      <div className=' flex gap-24 justify-center items-center h-[20%] w-[100%] ' >
        <button onClick={fetchQuoteData} className=' gap-3 button-30 ' >Random<FaRandom /></button>
        <button onClick={()=> addToList(quoteData)} className=' gap-3 button-30 ' >Add To List</button>
      </div>

 


    </div>
  )
}

export default Quote