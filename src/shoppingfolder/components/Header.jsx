
import React from 'react'

const Header = () => {
  return (
    <div className="HeaderSection">
        <div className="left">
            <div className="title">
                <h1> Shopping Mall</h1>
            </div>
        </div>
        <div className="center">
            <ul class="inline-list">
                <li>Women</li>
                <li>Men</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type ="text" placeholder='search.....'/>
        </div>
        <div className="right">
            <div className="signin">
                signin / signup
            </div>
            <div className="cart">
                cart
            </div>
        </div>
    </div>
  )
}

export default Header;
