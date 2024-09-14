import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import List from './components/List';
import { useState } from 'react';

function App() {


  const [savedTaskData,setSavedTaskData] = useState([]);
  

  return (
    <div className=' bg-[#4040ea] p-5 flex gap-12 justify-center items-center flex-col  w-full h-screen ' >

      <div className=' w-[100%] h-[10%] ' ><Navbar/></div>

      <div className=' gap-5 w-11/12 h-[90%] flex ' >
        <div className='  h-full w-[80%] ' > <Quote setSavedTaskData={setSavedTaskData} /> </div>
        <div className='  h-full w-[20%] ' > <List savedTaskData={savedTaskData} /> </div>
      </div>
          
    </div>
  );
}

export default App;
