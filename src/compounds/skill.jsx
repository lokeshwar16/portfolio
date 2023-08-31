import React from "react";
import cpp from "../asserts/cpp.png"
import nd from "../asserts/node.webp"
import ra from "../asserts/react.jpeg"
import mdb from "../asserts/mdb.jpeg"
import az from "../asserts/az.jpeg"
import js from "../asserts/js.jpeg"
import pyt from "../asserts/python.jpeg"
import "./skill.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "bootstrap"



const Skill = ()=>{
    return <section id="skill">
        <p className="stitle">Skills</p>
        <Swiper className="swiper"
      spaceBetween={100}
      effect={"coverflow"}
   grabCursor={true}
   centeredSlides={true}
   slidesPerView={"auto"}
   coverflowEffect={{
     rotate: 30,
     stretch: 0,
     depth: 200,
     modifier: 1,
     slideShadows: true,
     }} 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="sa">
        <p className="sk">C++ is first language I ever learn  as a cse student.And It is more understandable then C</p>
        <img src={cpp} alt="" className="simg" />
        <p className="sk">I studied till OOPs</p>
        </div></SwiperSlide>
        <SwiperSlide><div className="sa">
        <p className="sk">Python is  language Which everyone can easily in couple of days .And it is good to code,but the thing is u need learn  python DSA to build an efficient code</p>
        <img src={pyt} alt="" className="simg" />
        <p className="sk">I studied till OOPs,Django(I need to see this again becoz I work in year ago),FastApi(i know till CRUD)</p>
        </div></SwiperSlide>
        <SwiperSlide><div className="sa">
        <p className="sk">JavaScript is the language I understand quickly bcoz I already know c++ and python</p>
        <img src={js} alt="" className="simg" />
        <p className="sk">I studied till basics,DOM</p>
        </div></SwiperSlide>
        <SwiperSlide><div className="sa">
        <p className="sk">Node is Backend with studied after I got confused by django,But it easy to connect to db and we can easily figure out the workflow</p>
        <img src={nd} alt="" className="simg" />
        <p className="sk">I dont know what to say but use it in some projects</p>
        </div></SwiperSlide>
        <SwiperSlide><div className="sa">
        <p className="sk">React is sooo flexible package .it main concentrated on reusablity.</p>
        <img src={ra} alt="" className="simg" />
        <p className="sk">I studied till recently so I pratice with this project lol</p>
        </div></SwiperSlide>
        <SwiperSlide><div className="sa">
        <p className="sk">mongodb is database i learned couple weeks ago.And It is easy to access, and they provide free cluster which is actually quit good for practicing </p>
        <img src={mdb} alt="" className="simg" />
        <p className="sk">I studied CRUD and used it in MERN project</p>
        </div></SwiperSlide>
        <SwiperSlide><div className="sa">
        <p className="sk">Azure is cloudplatform which i use to work last month.those implementation more similar to the Aws </p>
        <img src={az} alt="" className="simg" />
        <p className="sk">Bcoz of billing I didnt do project ,but I use to practice in it sometimes</p>
        </div></SwiperSlide>
        
        
      
      
    </Swiper>
        </section>
}

export default Skill