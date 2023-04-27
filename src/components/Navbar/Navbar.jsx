import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from "../Avatar/Avatar"

const Navbar = () => {

  var user = null;

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <a>
          <img src={logo} alt='logo' className='nav-logo'/>
        </a>
        <a href="/" className='nav-item nav-btn'>About</a>
        <a  href="/" className='nav-item nav-btn'>For Products</a>
        <a  href="/" className='nav-item nav-btn'>For Teams</a>

        <form>
          <input type='text' placeholder='Search..' />
          <img src={search} alt='Search' width="18" className='search-icon'></img>
        </form>

        {user === null ? <a  href="/auth" className='nav-item nav-login'>Log in</a> :

          <>
            <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><a  href="/User" style={{padding:"7px 10px"}}> M </a></Avatar>
            <button className='nav-item nav-login'>Log Out</button>
          </>
        }
      </div>
    </nav>
  )
}
 
export default Navbar