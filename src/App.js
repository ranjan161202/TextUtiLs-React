import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[text,setText] = useState('Enable Dark Mode');
  const[alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      setText("Enable Light Mode");
      let darkModes = ["#4C0027","#041C32","#461111","#3E065F","#1E5128","#2A0944","#261C2C","#2C061F","#892CDC","#042743"]
      document.body.style.backgroundColor  =darkModes[Math.floor(Math.random()*10)] ;
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils- DarkMode";
      // setInterval(
      //   ()=>{
      //     document.title = "TextUtils is Amazing";
      //   },2000
      // );  
      // setInterval(
      //   ()=>{
      //     document.title = "Install TextUtils Now";
      //   },2000
      // );
    }
      else
    {
      setMode('light');
      setText("Enable Dark Mode");
      document.body.style.backgroundColor  = 'white' ; 
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils- Home";

    }
  }


  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} value = {text}/>
        <Alert alert = {alert}/>
        <div className='container my-3'>
            <Switch>
              <Route exact path="/about" >
                <About />
              </Route>
              <Route exact path="/">
                <Textform  showAlert = {showAlert} heading="Enter the text to Analyze" mode={mode}/> 
              </Route>
            </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
