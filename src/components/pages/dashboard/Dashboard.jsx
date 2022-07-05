import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboarditem from './Dashboarditem'

const Dashboard = (props) => {
  return (
    <div>
        <Link to="/addblog" className='btn btn-primary'>Add</Link>
        <table className="table">
    <thead>
 
      <tr>
        <th scope="col">#id</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Edit</th>
      </tr>
      {props.deyer.map(senan=>{
        return <Dashboarditem key={senan.id} {...senan}/>
      })}
    </thead>
    <tbody>

  
     
    </tbody>
  </table>
</div>
  )
}

const StatetoProps=(state)=>{
    return{
      deyer:state.meqale //reducerin adidi meqale store icinde yazilib
    }
  }
export default connect(StatetoProps) (Dashboard)