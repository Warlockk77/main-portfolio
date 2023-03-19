import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/utsav-sharma-b73042253/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/Warlockk77" target="_blank"><FaGithubSquare/></a>
        
    </div>
  )
}

export default HeaderSocials