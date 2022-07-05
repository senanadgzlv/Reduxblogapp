import React from 'react'
import { Link } from 'react-router-dom'

const Dashboarditem = ({id,title,desk}) => {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{title}</td>
    <td>{desk}</td>
    <td><Link to={`edit/${id}`}  className="btn btn-warning">Edit</Link></td>
  </tr>
  )
}

export default Dashboarditem