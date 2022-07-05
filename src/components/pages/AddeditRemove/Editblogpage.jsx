import React from 'react'
import { connect } from 'react-redux'
import Blogform from './Blogform'
import { editBlog, removeBlog } from '../../../actions/actionBlog'

const Editblogpage = props => {
  return (
    <div>
        
        <h3 className='text-center'>Edit Blog</h3>
        <Blogform  editblog={props.deyer}
     onFormSubmit={(a)=>{
        props.dispatch(editBlog(props.deyer.id,a));
        props.history.push('/dashboard');
    }}
    />

        <button className='btn btn-danger mt-3' 
        onClick={()=>{
            props.dispatch(removeBlog({id:props.deyer.id}))
            props.history.push('/dashboard');
        }}
        >Delete</button>



    </div>
  )
}
const StateToProps=(state,props)=>{
    return{
        deyer:state.meqale.find((b)=>{
            return b.id === props.match.params.id;
        })
    }
}

export default connect(StateToProps) (Editblogpage)