import React from "react";
import "./navbar.css"
import logo from "../asserts/l-32.png"
import msg from "../asserts/chat.png"
import {Link} from "react-scroll"

const Navbar = ()=>{
    return <div className="navbar">
        <img  className="logo" src = {logo} alt="logo" />
        <div className="menu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="navtem">Home</Link>
            <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} className="navtem">About</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} className="navtem">Skills</Link>
            <Link activeClass='active' to='hobby' spy={true} smooth={true} offset={-100} className="navtem">Hobby</Link>
        </div>
        <Link activeClass='active' to='Footer' spy={true} smooth={true} offset={-100}  ><button className="navbtn"><img className="msg" src={msg} alt="" />Contact Me</button></Link>

    </div>
}

export default Navbar