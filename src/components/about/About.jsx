import React from 'react';
import './about.css';
import ME from '../../assets/me1-about.png';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'> 
    <h5>Get to know</h5>
    <h2>About Me</h2>
<div className='container about__container'>
    <div className='about__me'>
      <div className="about__me-image">
        <img className='about-me-img' src={ME} alt="about-me-image"/>

      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaUsers className='about__icon' />
<h5>Clients</h5>
<small>served client as a freelancer</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
<h5>Projects</h5>
<small>25+ Completed Hobby Projects</small>
        </article>
      </div>

      <p>I am a courteous and energetic
individual and I want to explore
the dynamics of a challenging
career by reshaping my
Engineering knowledge and
integrate my skills. My mission is
to meet the needs of employer
through technical excellence
while constantly learning .</p>


      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
     </section>
  )
}

export default About