import React, { useEffect } from 'react'
import ListCard from './ListCard';


function List({savedTaskData}) {

  // const {list} = useList();
  
  useEffect(() => {
    console.log("List updated: ", savedTaskData);
    
  }, [savedTaskData]);



  return (
    <div className=' overflow-auto scrollbar-hide bg-white flex flex-col gap-3  items-center  p-3 rounded-2xl border-2 shadow-inner shadow-slate-600 h-[100%] w-[100%]   ' >

    <div className=' w-[100%] flex flex-col gap-3 items-center '>
    <div className=' h-[30px] w-[100%]    text-gray-600  flex justify-center text-[20px] ' >Saved Quotes</div>
    <div className=' h-[3px] w-11/12 bg-[#a538e8] ' ></div> 
    </div>
    

    <div className=' w-[100%] flex flex-col items-center h-[100%] ' >

        

          <div className='  gap-4 flex flex-col items-center  w-[100%]  ' >
          {
            savedTaskData.length > 0 ? savedTaskData.map((item,index)=>(

                  <ListCard quote={item} key={index} />
                
            )) : <p>
            
            No item</p>
          }
          </div>


        

    </div>


    </div>
  )
}

export default List