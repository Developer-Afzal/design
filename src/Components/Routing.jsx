import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
const Routing = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route  element={<Layout/>}>
                <Route path='/' element={<Dashboard/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
        </Routes>
   </BrowserRouter>
  )
}

export default Routing