import React from 'react'
import { connect } from 'react-redux'
import Blogdetailsitem from './Blogdetailsitem'

import Bloglistitem from './Bloglistitem'

const Bloglistpage = (props) => {
  return (

   <section className="blogpage">
 <div className='row'>
       
       {props.deyer.map(senan =>{
         return <Bloglistitem key={senan.id} {...senan} /> // ...senan ile deyerlerin hamsini bir vaxtda tuturuq
       })}
          
            
            </div>
   </section>
    


  )
}

const StatetoProps=(state)=>{
  return{
    deyer:state.meqale //reducerin adidi meqale store icinde yazilib
  }
}

export default connect(StatetoProps) (Bloglistpage)