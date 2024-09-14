import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Card({quoteData,loading}) {

    


  return (
    <div className=' text-center text-[38px] ' >
              
    {

    
      
      loading ? <p>...</p> :  

             

              <div className=' flex items-center flex-col '>
                  <p className=' w-[100%] flex justify-start items-center ' >
                  <FaQuoteLeft  className=' text-[65px] ' />
                  </p>
                   <p className=' border-blue-300 border-2 w-10/12 ' >
                   {quoteData}
                   </p>
                  <p className=' w-[100%] flex justify-end items-center '>
                  <FaQuoteRight  className=' text-[65px] ' />
                  </p>
              </div>

            

    }
   
    </div>
  )
}

export default Card
