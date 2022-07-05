import React from 'react'
import { connect } from 'react-redux'
import Blogdetailsitem from './Blogdetailsitem'

const Blogdetails = props => {
  return (
    <div>

<Blogdetailsitem {...props.deyer}/>


    </div>
  )
}

const statetoprops=(state,props)=>{
    return {
        deyer: state.meqale.find((axtarilandeyer) => {
            return axtarilandeyer.id === props.match.params.id
        })
    }
}

export default connect(statetoprops) (Blogdetails)