import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      <>
        {/* <nav classname="navbar navbar-expand-lg navbar-dark bg-dark">
        <div classname="container-fluid">
          <a classname="navbar-brand" href="/">{props.title}</a>
          <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span classname="navbar-toggler-icon"></span>
          </button>
          <div classname="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
              <li classname="nav-item">
                <Link classname="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li classname="nav-item">
                <a classname="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <form classname="d-flex">
              <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button classname="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}
     <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">TextUtils</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className='d-flex'>
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
          </div>
          {/* <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick = {()=>{props.toggleMode('primary')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">{props.value}</label>
          </div> */}
          {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav> 
      </>  
    )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About Text here"
}

