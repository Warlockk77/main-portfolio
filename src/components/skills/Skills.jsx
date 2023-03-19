import React from 'react';
import './skills.css';

import {AiFillHtml5} from  'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaBootstrap} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {SiExpress} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';

import {jslogo} from '../../assets/js-logo.png';



const Skills = () => {
  return (
    <section id='skill'>
        <h5>What Skills I Have</h5>
        
      
        <div className='container skill__container'>
            <div className="skill__frontend">
                <h3>Frontend Development</h3>
                <div className='skill__content'>
                    <article className="skill__detail">
                        <AiFillHtml5 className='skill__detail-icon' />
                        <div><h4>HTML</h4></div>
                        
                    </article>
                    <article className="skill__detail">
                        <FaCss3Alt className='skill__detail-icon' />
                        <div><h4>CSS</h4></div>
                        
                    </article>
                    <article className="skill__detail">
                        <TbBrandJavascript className='skill__detail-icon' />
                        <div><h4>JavaScript</h4></div>
                        
                    </article>
                    <article className="skill__detail">
                        <FaReact className='skill__detail-icon' />
                        <div><h4>React</h4></div>
                        
                    </article>
                    <article className="skill__detail">
                        <FaBootstrap className='skill__detail-icon' />
                        <div><h4>Bootstrap</h4></div>
                        
                    </article>
                </div>
            </div>
            <div className="skill__frontend">
               <div> <h3>Backend Development</h3> </div>
                <div className='skill__content'>
                    <article className="skill__detail">
                        <DiMongodb className='skill__detail-icon'/>
                        <div><h4>MongoDB</h4></div>
                        
                    </article>
                    <article className="skill__detail">
                        <SiExpress className='skill__detail-icon'/>
                        <div><h4>ExpressJS</h4></div>
                        
                    </article>
                    <article className="skill__detail">
                        <FaNodeJs className='skill__detail-icon'/>
                        <div><h4>NodeJS</h4></div>
                        
                  </article>
                </div>
                
            </div>

            
        </div>
    

     
        
    </section>
  )
}

export default Skills