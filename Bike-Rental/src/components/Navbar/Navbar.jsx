import React from 'react'
import '../NavbarCss/nav.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className="flexbox">
                <div className='name'>
                    <a href="/"><img src="https://pngtree.com/freepng/big-black-motorbike-elegant-transparent-background_16371090.html" alt="" /></a>
                    <h1>BikeRental</h1>
                </div>
                <div><h1>Home</h1></div>
                <div><h1>About</h1></div>
                <div><h1>Bike Modals</h1></div>
                <div><h1>Contact</h1></div>
                <div>Sign-In</div>
                <div><button>Register</button></div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
