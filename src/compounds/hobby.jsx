import React from "react";
import "./hobby.css";
import tr from "../asserts/tr.png"
import cd from "../asserts/cd.png"
import sp from "../asserts/sp.png"
import fd from "../asserts/fd.png"



const Hobby = ()=>{
    return <section id="hobby">
        <h1 className="htitle">Hobby</h1>
        <div className="hob">
        <img src={tr} alt="" className="li" />
            <p className="l">Getting away from home and stepping outside of your usual routine is beneficial for both mind and body. The long-lasting personal benefits of visiting a foreign country far outweigh the costs and time to get there. The great travel writer Pico Lyer said: "Travel is not really about leaving our homes, but leaving our habits".</p>
            </div>
            <div className="hobl">
            <img src={cd} alt="" className="ri" /><p className="r"> I balance between coding for fun and coding as a possible source of income, I’m convinced any programmer—including experienced, full-time professionals—can rediscover this kind of programming joy. Most of the time i use to code midnights</p>
            
            </div>
            <div className="hob">
            <img src={sp} alt="" className="li" />
            <p className="l">Sleep might just be the key to our happiness and peak performance. Nothing could be more true for children. Kids need a lot of sleep to be happy. Unfortunately, studies show that kids are getting significantly less sleep per night .</p>
            
            </div>
            <div className="hobl">
            <img src={fd} alt="" className="ri" />
            <p className="r"> There’s nothing better than sharing good food and experiencing new dishes with others who have the same passion for cuisine. Not only does this make for great conversation, but you’ll bond over the new foods that you try, make plans to discover other food experiences together and even find a new travel buddy or make new friends for life!</p>
            
            </div>
            
    </section>
}

export default Hobby