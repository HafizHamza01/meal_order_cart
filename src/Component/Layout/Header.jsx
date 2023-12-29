import React from 'react'
import CartIcon from '../Cart/CartIcon'
import "./Header.css"
import image from "../images/meals.jpg"
const Header = ({ fullArray }) => {
  return (
    <>
      <header className='header_container'>
        <div className='header_sub_container'>
          <h2>ReactMeals</h2>
          <div className='icon_component'>
            <CartIcon fullArray={fullArray} />
          </div>
        </div>
      </header>
      <section className='img_section'>
        <img src={image} alt="" />
      </section>
    </>
  )
}

export default Header
