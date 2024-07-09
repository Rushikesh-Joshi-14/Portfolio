import React from 'react'
import './about.css'
import me from '../../assets/Rushikesh.png'
import {Link} from 'react-scroll'
import hireImg from '../../assets/hireme.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Typed from 'typed.js'

AOS.init();



const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Java Developer' , 'Python Developer' , 'React.js Developer'],
      typeSpeed: 70,
    });
  
    return () => {
      
      typed.destroy();
    };
  }, []);
  
  return (
    <section id='about'>
        <div className='aboutContent' data-aos="zoom-in-up" data-aos-duration="2000">
            <span className='aboutText'>I'm <span className='aboutName'>Rushikesh </span></span> 
            <span className='aboutRole' ref={el}></span>
            <p className='aboutPara'>Skilled web developer proficient in creating dynamic and<br/> user-friendly websites, 
              adept at both front-end<br/> and back-end technologies to ensure optimal functionality and aesthetics</p>
            <Link><button className='hireBTN'><img className='hireImg' src={hireImg}/> Hire Me</button></Link>
        </div>
        <img src={me} alt='profile' className='profileImg' data-aos="zoom-in" data-aos-duration="2000"/>

    </section>

    
  )
}

export default About
