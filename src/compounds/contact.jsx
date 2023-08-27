import React ,{useRef}from "react";
import "./contact.css";
import Git from "../asserts/github-48.png"
import Linkedin from "../asserts/linkedin-48.png"
import Youtube from "../asserts/youtube-48.png"
import Insta from "../asserts/instagram-48.png"
import emailjs from '@emailjs/browser';



const Contact = ()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kk27f9f', 'template_fylp3ob', form.current, '2q5WO2RxeTitf1Z7aTESL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return <section id="Footer">
        <div className="contact">
            <h1 className="contacttitle">Contact</h1>
            <p className="contactme">Kindly fill this contact to discuss⭐</p>
            <form ref={form} className="contactform" onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Name"
                name="your_name" />
                <input type="email" className="email" placeholder="Email"
                name="your_email" />
                <textarea className="msge" id="" cols="1" rows="5" placeholder="Message" name="message"></textarea>
                <button type="submit" value="Send" onClick={sendEmail}className="conbtn">Submit</button>
            </form>
        </div>
        <div className="end">
            <a href="https://github.com/lokeshwar16"><img src={Git} alt="" className="soc" /></a>
            <a href="https://www.linkedin.com/in/lokeshwar-k-38b8b1233"><img src={Linkedin} alt="" className="soc" /></a>
            <a href="https://www.youtube.com/"><img src={Youtube} alt="" className="soc" /></a>
            <a href="https://www.instagram.com/__lokeshwar_k__/"><img src={Insta} alt="" className="soc" /></a>
            <p>@Copy2023</p>
        </div>
    </section>
}

export default Contact