import './App.css';
// import Accordian from './components/Accordian';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react'
import Alert from './components/Alert';


function App(){

  const [mode, setmode] = useState('light')
  const [darklight, setdarklight] = useState('Dark Mode')
  const [alert, setalert] = useState(null)
  const [btnmood, setbtnmood] = useState('secondary')
  const [radiotgl, setradiotgl] = useState(true)



  const showAlert =(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000); 
  }

  const toggle =()=>{
    setbtnmood('secondary')
    if(mode==='light'){
      setmode('dark')
      setdarklight('Light Mode')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark Mode is Enabled', 'success')
      // setInterval(() => {
      //   document.title = 'Text Analyzer - Dark Mode'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install Netflix Now'
      // }, 2000);
      setradiotgl(false)
    }else{
      setmode('light')
      setdarklight('Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode is Enabled', 'success')
      setradiotgl(true)
    }
  }
  const redmode =()=>{
    if(mode==='dark'){
      setbtnmood('danger')
      document.body.style.backgroundColor = '#522222'
      setmode('dark')
      setdarklight('Light Mode')
      // showAlert('Dark Mode is Enabled', 'success')
    }
  }

  const bluemode =()=>{
    if(mode==='dark'){
      setbtnmood('primary')
      document.body.style.backgroundColor = '#222b52'
      setmode('dark')
      setdarklight('Light Mode')
      // showAlert('Dark Mode is Enabled', 'success')
    }
  }

  const greenmode =()=>{
    if(mode==='dark'){
      setbtnmood('success')
      document.body.style.backgroundColor = '#225230'
      setmode('dark')
      setdarklight('Light Mode')
      // showAlert('Dark Mode is Enabled', 'success')
    }
  }

  return ( <>
    {/* // <Router> */}

    <Navbar brand="urbo's Space"  radioTgl={radiotgl} home="Home" toggle={toggle} modetext={darklight} mode={mode} red={redmode} green={greenmode} blue={bluemode} />
      {/* <TextForm heading="Enter Text To Transform" mode={mode} showAlert={showAlert} btnmode={btnmood} /> */}
    <Alert alert={alert} />
    <TextForm heading="Enter Text To Transform" mode={mode} showAlert={showAlert} btnmode={btnmood} />
    {/* <Accordian mode={mode} /> */}


    {/* <Routes>
      <Route exact path="/" element={<TextForm heading="Enter Text To Transform" mode={mode} showAlert={showAlert} btnmode={btnmood} />}></Route>
      <Route exact path='/home' element={<TextForm heading="Enter Text To Transform" mode={mode} showAlert={showAlert} btnmode={btnmood} />}></Route>
      <Route exact path='/about' element={<Accordian mode={mode} />}></Route>
    </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
