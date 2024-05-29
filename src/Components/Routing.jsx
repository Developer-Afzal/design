import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
const Routing = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/design' element={<Layout/>}>
                <Route index element={<Dashboard/>}/>
            </Route>
        </Routes>
   </BrowserRouter>
  )
}

export default Routing