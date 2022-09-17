import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><span className='style'>T</span>{props.brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}

      {/* <div className="d-flex">
          <div className='bg-primary rounded mx-2' style={{height:'20px', width:'20px'}}></div>
          <div className='bg-warning rounded mx-2' style={{height:'20px', width:'20px'}}></div>
          <div className='bg-danger rounded mx-2' style={{height:'20px', width:'20px'}}></div>
      </div> */}

    <div className="form-check">
      <input className="form-check-input red-radio" disabled={props.radioTgl} onClick={props.red} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    </div>
    <div className="form-check">
      <input className="form-check-input green-radio" disabled={props.radioTgl} onClick={props.green}  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" disabled={props.radioTgl} onClick={props.blue} name="flexRadioDefault" id="flexRadioDefault1"/>
    </div>

  
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" className="form-check-input" onClick={props.toggle} id="flexSwitchCheckDefault" />
        <label htmlFor="flexSwitchCheckDefault" className="form-check-label">{props.modetext}</label>
      </div>
      
    </div>
  </div>
</nav>

  )
}

Navbar.propTypes = {
  brand: PropTypes.string.isRequired,
  home: PropTypes.string
}

Navbar.defaultProps = {
  brand: 'Put your brand here',
  home:  'home tab'
}
