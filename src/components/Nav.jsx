import React from 'react'
import { Link, NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">BluePrint</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="blog">Blogs</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Demos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Features</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" >Contact</a>
          </li>
        </ul>
     
        <div className="d-flex" >
          <Link className="btn btn-outline-success" to="/dashboard">Admin Panel</Link>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav