import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  
 const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#3489b4';
    }
  else{
      setMode('light');
    document.body.style.backgroundColor ='white';

      }

  }

  return (
  <> 

  {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
  {/* <Navbar */}

  <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
  <div className='container my-3'>
  <TextForm heading="Enter to the text analyze below" mode={mode} />
  <About/>
  </div>
  </>
);
}

export default App;
