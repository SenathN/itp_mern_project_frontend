import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header id='header'>
                <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-around' }}>
                    <div >
                        <img src="logo.png" width="200px" alt="Odyssey Logo" style={{ verticalAlign: 'middle' }} />
                    </div>
                    <div style={{ width: '400px', position: "relative" }}>
                        <h1 style={{ fontSize: '30px' }} >ODYSSEY</h1>
                        <hr/>
                        <p style={{ 'text-align': 'center', fontSize: 'small'}} >
                            Your Holiday Vacation Companion<br /><br />
                            Labugolla Estate, Rangamuwa, Columbo, Sri Lanka.<br />
                            Contact : +94 71 264 3548<br />
                            Email : oddyseyexperience@gmail.com
                        </p>
                    </div>
                    <div style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'space-between' }}>
                        <div/>
                        <div style={{width: '250px'}}>
                            <p style={{textAlign: 'justify'}}>Join the Odysey community to start your adventure.</p>
                            <Link to='/login'><button class="UI_buttons">Log in</button></Link>
                            <Link to='/sign-up'><button class="UI_buttons">Sign up</button></Link>
                        </div>
                    </div>
                </div>

                <nav id='navigation_bar'>
                    <Link><button className="navigation_btns">Destinations</button></Link>
                    <Link to='/'><button className="navigation_btns">Home</button></Link>
                    <Link><button className="navigation_btns">Gallery</button></Link>
                    <Link><button className="navigation_btns">Experiences</button></Link>
                    <Link><button className="navigation_btns">Reviews</button></Link>
                    <Link><button className="navigation_btns">About us</button></Link>
                </nav>

            </header>
  )
}

export default Header