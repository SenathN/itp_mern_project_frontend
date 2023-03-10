import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <p>or <Link to='/sign-up'> sign up here </Link> if you do not have an account.</p>
    </>
  )
}

export default Login