import React from 'react'
import './Footer.css'
import Foo from '../../assets/footer.png'
import { GoArrowRight } from "react-icons/go";
import { BiCopyright } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <div className='body'>
        <div className="left_foo">
            <div className="top">
                <div className="content">
                    <input type="text"  placeholder='Enter Your Email'/>
                    <button>Subscribe <GoArrowRight className='arrow'/></button>
                </div>
            </div>
            <div className="bottom">
                <div className="lbottom">
                    <h3>pti<span>.</span></h3>
                    <p>Copyright<BiCopyright className='copy'/>Tripp.All Right Reserved</p>
                </div>
                <div className="rbottom">
                    <div className="icon">
                        <BsGoogle className='item'/>
                    </div>
                    <div className="icon">
                        <BsTwitter className='item'/>
                    </div>
                    <div className="icon">
                        <BiLogoInstagram className='item'/>
                    </div>                  
                </div>
            </div>
        </div>
        <div className="right_foo">
            <img src={Foo} alt="" />
        </div>
    </div>
  )
}

export default Footer