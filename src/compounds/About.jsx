import React from "react";
import "./about.css";
import school from "../asserts/school.png"
import school2 from "../asserts/school2.png"
import school3 from "../asserts/school3.png"


const About = ()=>{
    return <section id ="About">
        <div className="edu">
            <h1 className="abouttitle">Education</h1>
            <p className="aboutme">I'm web developer,I love to code in python ,javscript.Recently I complete my web development course in udemy.After that I done userid login using mern stack And I use to do some application works in Azure and AWS playtforms</p>
            <div className="history">
                <img src={school} alt="" className="school" />
                <div className="std">
                    <p>10th</p>
                    <p>st.anne's higher secondary school</p>
                    <p>Kumbakonam</p>
                    <p>87%</p>
                </div>
                <img src={school2} alt="" className="school" />
                <div className="std">
                    <p>12th</p>
                    <p>Brindhavan higher secondary school</p>
                    <p>Pattukkottai</p>
                    <p>78%</p>
                </div>
                <img src={school3} alt="" className="school" />
                <div className="std">
                    <p>UG</p>
                    <p>Sastra Deemed University</p>
                    <p>Thanjavur</p>
                    <p>7 Cgpa</p>
                </div>
            </div>
        </div>
    </section>
}

export default About