import React, { Component } from 'react'
import './header.css'

 class Header extends Component {
  render() {
    return (
      <div>
         <header>
         <a href="#" class="logo">
            <a href="">logo</a>
        </a>
         <nav>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </nav>
              
        </header>

      
      </div>
    )
  }
}
export default Header