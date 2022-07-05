import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../img/demo.jpg"
import img2 from "../../img/demo2.jpg"

const Bloglistitem = ({title,id,desc,img}) => {
  return (

<div className="col-12 col-md-4 blog-content">
      <img src={img1} class="card-img-top foto"  alt="..."></img>
     
  <div className="card-body">
      <h5 style={{color: "white"}  }   className="card-title">{title}</h5>
      {/* <p  style={{color: "white"}} className="card-text">{desc}</p> */}
      <Link to={`/blog/${id}`} className="btn btn-primary">Read More</Link>
    </div>
  </div>

   
 
  )
}

export default Bloglistitem