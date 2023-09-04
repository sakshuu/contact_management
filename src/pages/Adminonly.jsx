import React from 'react'
import { useSelector } from 'react-redux'

export default function Adminonly({element}) {
    const { login } = useSelector(state => state.allUsers)
  return login && login.admin 
  ? element 
  : "UnAuthorized Access" 
}