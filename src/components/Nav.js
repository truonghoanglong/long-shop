import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
const Nav = () => {
  const {quantity} = useContext(CartContext)
  return (
    <div>
        <div className="topnav">
            <NavLink className="" to=""><h2 style={{marginTop:"5px"}} id="img-nav">LONG</h2></NavLink>
            <NavLink id="cart" to="/cart"><FaShoppingCart/><span id="quantity">{quantity}</span></NavLink>
        </div>
    </div>
  )
}

export default Nav