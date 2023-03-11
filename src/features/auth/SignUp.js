import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <h1>SignUp</h1>

            <form id='login_form'>
                <input type='text' placeholder='Username' /> <br />
                <input type='password' placeholder='Password' /> <br />
                <br />
                <input type='submit' />
            </form>
            
            <p>Want to host your services? <Link>sign up for services</Link> here</p>
        </>
    )
}

export default SignUp