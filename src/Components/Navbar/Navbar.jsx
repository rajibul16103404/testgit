import React from 'react'
import './Navbar.css'
import { BiUser } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import Dropdown from 'react-bootstrap/Dropdown';

function navbar() {
  return (
    <div className='container'>
        <div className="left">
                <h3>pti.</h3>
            </div>
            <div className="middle">
                <div className="one">
                    <BiSearch className='search' />
                    <input type="text" placeholder='Search Audiobook'/>
                </div>
                <div className="two">
                    <Dropdown className='menu'>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                            MENU
                            <SlArrowDown className='down'/>
                        </Dropdown.Toggle>
                        

                        <Dropdown.Menu className='drop'>
                            <Dropdown.Item className='item'>Home</Dropdown.Item>
                            <Dropdown.Item className='item'>Details</Dropdown.Item>
                            <Dropdown.Item className='item'>Category</Dropdown.Item>
                            <Dropdown.Item className='item'>My Favorites</Dropdown.Item>
                            <Dropdown.Item className='item'>Profile</Dropdown.Item>
                            <Dropdown.Item className='item'>Log In/Sign Up</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="right">
                <BiUser className='icon' />
            </div>
    </div>
  )
}

export default navbar