import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Loginonly from './pages/Loginonly'
import Adminonly from './pages/Adminonly'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Account from './pages/user/Account'
import AddContact from './pages/user/AddContact'
import Dashbord from './pages/user/Dashbord'

export default function App() {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/user/add-contact'   element={<Loginonly element={<AddContact/>}/>}></Route>
      <Route path='/user/Account'  element={<Loginonly element={<Account/>}/>}></Route>
      {/* admin */}
      <Route path='/user/Dashboard' element={<Adminonly element={<Dashbord/>}/>}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  </BrowserRouter>
}
