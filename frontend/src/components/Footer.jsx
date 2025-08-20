import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div>
        <div>
            {/**-----Left Content **/}
            <div>
                <img src={assets.logo} alt=''></img>
                <p>Your trusted healthcare partner, making appointments and prescriptions simple, transparent, and accessible anytime.</p>
            </div>
           
            {/**-----Center Content **/}
            <div>
                <p>COMPANY</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/**-----Right Content **/}
            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+0-000-000-000</li>
                    <li>appointix@gmail.com</li>
                </ul>
            </div>
        </div>

        {/**----------Copyright Text------- */}
        <div>
            <hr />
            <p>Copyright 2024 @ Appointix - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer