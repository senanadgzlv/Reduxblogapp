import React from 'react'
import img from "../../img/demo2.jpg"

const Blogdetailsitem = ({id,title,desc}) => {
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center flex-column blogdetal'>
     <img src={img} className="" alt="" /> 
    <h1 className='text-danger'>Blog Title: <span className='text-dark'>{title}</span> </h1>
    <p  className='text-success'>Blog Description:<span className='text-dark'>{desc}</span></p>
</div>
  )
}

export default Blogdetailsitem