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
  const[text,setText] = useState('Enable Toggle Mode');
  const[alert, setAlert] = useState(null);
  const[btn_color,setBtnColor] = useState('primary');
  const[h1_color,setH1Color] = useState('black');

  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-light');
  }
  const toggleMode =(cls)=>{
    if(cls==='primary' || cls==='success' || cls==='info')
    {
        setBtnColor('danger');
    }
    else
        setBtnColor('primary');
        
        removeBodyClasses();
        document.body.classList.add('bg-'+cls);
        if(mode==='light')
        {
          if(cls!=='light')
            setH1Color('white');
          else
            setH1Color('black');
          setMode('dark');
          setText("Disable Toggle Mode");
          showAlert("Dark Mode has been enabled","success");
          
        }
        else
        {
          setMode('light');
          setText("Enable Toggle Mode");
          showAlert("Light Mode has been enabled","success");
          setH1Color('black');
          
          
          
      // document.title = "TextUtils- Home";

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
                <About mode={mode}/>
              </Route>
              <Route exact path="/">
                <Textform  showAlert = {showAlert} h1_color={h1_color} button_color = {btn_color} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/> 
              </Route>
            </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
