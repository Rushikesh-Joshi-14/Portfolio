import React from 'react'
import './skills.css'
import java from '../../assets/java.png'
import Python from '../../assets/python.png'
import node from '../../assets/node.png'
import react from '../../assets/react.png'
import mysql from '../../assets/mysql.png'

const Skills = () => {
  return (
    <>

<section id='education' className='skills_education'>
<span className='skillsTitle' data-aos="zoom-in-up" data-aos-duration="1500">Education</span>
<span className='skillsDesc' data-aos="zoom-in-up" data-aos-duration="1500"> A dedicated student of computer science, <br/>
    passionate about exploring algorithms, 
    coding languages, <br/>and emerging technologies
    to solve complex problems and innovate in the digital world </span>

<div className='skillBars' >

    <div className='skillBar' data-aos="flip-left" data-aos-duration="2000">
        
        <div className='skillBarText'>
            <h1> MCA</h1>
            <p> Master of Computer Application</p>
            <p className='boldtext'> Dr. D.Y. Patil Institute of Management & Research , Pimpri, Pune</p>
            <p> 2023-2025</p>
            <p>Currently Pursuing</p>
        </div>
    </div>

    <div className='skillBar' data-aos="flip-left" data-aos-duration="2000">
        
        <div className='skillBarText'>
            <h1> BCS</h1>
            <p> Bachelor of Computer Science</p>
            <p className='boldtext'>Swami Ramanad Teerth Marathwada University, Nanded</p>
            <p> 2019-2022</p>
            <p> final CGPA <span className='boldtext'>9.47</span></p>
        </div>
    </div>

   

</div>


</section>




   <section id='skills' className='skills_education'>
    <span className='skillsTitle' data-aos="zoom-in-up" data-aos-duration="1500">Skills</span>
    <span className='skillsDesc' data-aos="zoom-in-up" data-aos-duration="1500"> Proficient in computer science skills including<br/>
         programming languages, 
         algorithms, data structures, and problem-solving techniques,<br/>
         with a strong foundation in Web development and technological innovation. </span>

    <div className='skillBars' >

        <div className='skillBar' data-aos="flip-left" data-aos-duration="2000">
            <img src={react} className='skillImg'/>
            <div className='skillBarText'>
                <h1> React.js</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
        </div>

        <div className='skillBar' data-aos="flip-left" data-aos-duration="2000">
            <img src={node} className='skillImg'/>
            <div className='skillBarText'>
                <h1> Node.js</h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
        </div>


        <div className='skillBar' data-aos="zoom-in-up" data-aos-duration="2500">
            <img src={java} className='skillImg'/>
            <div className='skillBarText'>
                <h2> Java</h2>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
        </div>

        <div className='skillBar' data-aos="flip-right" data-aos-duration="2000">
            <img src={Python} className='skillImg'/>
            <div className='skillBarText'>
                <h1> Python </h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
        </div>

        <div className='skillBar' data-aos="flip-right" data-aos-duration="2000">
            <img src={mysql} className='skillImg'/>
            <div className='skillBarText'>
                <h1> Mysql </h1>
                <p> This is Dummy Text This is Dummy Text This is Dummy Text This is Dummy Text</p>
            </div>
        </div>

    </div>


   </section>



</>
  )
}

export default Skills
