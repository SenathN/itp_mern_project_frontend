import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
        <header id='header'>
            <div id='header_top'>
                <Link to='/' >
                    <div id='header__titleDiv'>
                        <img id="title_img" src='./word_logo.png' alt='Profile'/>
                    </div>
                </Link>
                <div id='header__accDiv'>
                    <div style={{ maxWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ textAlign: 'justify' }}>Start your adventure.</p>
                        <Link to='/login' style={{ textDecoration: 'none' }} >
                            <div id='log_holder'>
                                Sign in
                                <img id="log_btn_img" src='./icons8-user-96.png' alt='Profile' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
            <nav id='navigation_bar'>
                <Link><button className="navigation_btns">Destinations</button></Link>
                <Link to='/'><button className="navigation_btns">Home</button></Link>
                <Link><button className="navigation_btns">Gallery</button></Link>
                <Link><button className="navigation_btns">Experiences</button></Link>
                <Link><button className="navigation_btns">Reviews</button></Link>
                <Link><button className="navigation_btns">About us</button></Link>
            </nav>
        </header >
    )
}

export default Header