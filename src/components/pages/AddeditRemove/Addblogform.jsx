import React from 'react'
import Blogform from './Blogform'
import { connect } from 'react-redux'
import {addblog }   from "../../../actions/actionBlog"

const Addblogform = props =>{
  return (
    <div>
        <h3 className='text-center'>Add Blog Page</h3>
        <Blogform onFormSubmit={(gelenblog)=>{
            props.dispatch(addblog(gelenblog));
            props.history.push('/dashboard');
        }} /></div>
  )
}

export default connect()(Addblogform)