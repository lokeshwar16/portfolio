import React from "react";
import "./intro.css";
import {Link} from "react-scroll"
import loki from "../asserts/meportfolio.png"


const Intro = ()=>{
    return <section id="intro">
        <div className="content">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introname">Lokeshwar</span><br />Web Developer</span>
            <p className="intropara">I,m student who skilled enough to create this web <br /> and u get some beginner project in my Git😊</p>
            <Link activeClass='active' to='Footer' spy={true} smooth={true} offset={-100} ><button className="hire">Hire Me</button></Link>
        </div>
        <img src={loki} alt="" className="me" />
    </section>
}

export default Intro