import React from 'react';
import portfolio1 from '../../assets/singleChat.png'
import portfolio2 from '../../assets/Fabrication.png'
import portfolio3 from '../../assets/portfolio.png'
import portfolio4 from '../../assets/PM.png'
import portfolio5 from '../../assets/chatting.png'

import './works.css'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='workTitle'  data-aos="fade-down-right" data-aos-duration="1500" >My Projects</h2>
        <p className='workDesc'  data-aos="fade-up-left" data-aos-duration="1500" >dummy text dummy dummy text dummy dummy text dummy dummy text dummy dummy text dummy dummy text dummy  text dummy text dummy text dummy text dummy text dummy text dummy text dummy text </p>

        <div className='workImages'>
       
            <img className='workImg' src={portfolio1} data-aos="flip-up" data-aos-duration="1500"/>
            <div className='ProjectsText'>
                <h1> Real Time chatting Application</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
            <img className='workImg' src={portfolio2} data-aos="flip-up" data-aos-duration="1500"/>
            <div className='ProjectsText'>
                <h1> Fabrication Website</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
            <img className='workImg' src={portfolio3} data-aos="flip-up" data-aos-duration="1500"/>
            <div className='ProjectsText'>
                <h1> portfolio Website</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
            <img className='workImg' src={portfolio4} data-aos="flip-up" data-aos-duration="1500"/>
            <div className='ProjectsText'>
                <h1> Prject Management System</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
            <img className='workImg' src={portfolio5} data-aos="flip-up" data-aos-duration="1500"/>
            <div className='ProjectsText'>
                <h1> Simple chatting Application</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
           
        </div>
    <button className='workBtn' data-aos="zoom-in-up" data-aos-duration="1500">See More</button>
    </section>
  )
}

export default Works
