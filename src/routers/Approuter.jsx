import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import BlogListPage from '../components/pages/Bloglistpage'
import HomePage from '../components/pages/Homepage'
import Blogdetails from '../components/pages/Blogdetails'
import Addblogform from '../components/pages/AddeditRemove/Addblogform'
import Dashboard from '../components/pages/dashboard/Dashboard'
import Editblogpage from '../components/pages/AddeditRemove/Editblogpage'

const Approuter = () => {
  return (

     <BrowserRouter>
    <Nav/>
    <div className='container' >
    <Route path="/" exact component={HomePage}></Route>
    <Route path="/blog" exact component={BlogListPage}></Route>
    <Route path="/blog/:id" component={Blogdetails}></Route>
    <Route path="/addblog" component={Addblogform} ></Route>
    <Route path="/dashboard" component={Dashboard} ></Route>
    <Route path="/edit" component={Editblogpage} ></Route>

    </div>

    </BrowserRouter>

  )
}

export default Approuter