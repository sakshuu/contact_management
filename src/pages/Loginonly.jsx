import React from 'react'
import { useSelector } from 'react-redux'

export default function Loginonly({element}) {
    const { login } = useSelector(state => state.allUsers)
  // return login 
  // ? element 
  // : "UnAuthorized Access"


  // Nested if
  return login
  ? login.admin
  ? "Dash board page"
  : element
  : "UnAuthorized Access"
}
